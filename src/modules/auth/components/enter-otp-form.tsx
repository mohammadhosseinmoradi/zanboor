"use client";

import { Button } from "@/components/button";
import { Loading } from "@/components/loading";
import { InputField } from "@/components/input-field";
import { Controller, useForm } from "react-hook-form";
import ErrorMessage from "@/components/error-message";
import { Fragment, useEffect, useState, useTransition } from "react";
import { Text } from "@/components/text";
import { ThemeImage } from "@/components/theme-image";
import { Link } from "@/components/link";
import { routes } from "@/lib/constants/routes";
import OtpInput from "@/components/otp-input/otp-input";
import type { EnterPhone, EnterOtp } from "@/modules/auth/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { enterOtpSchema } from "@/modules/auth/schema";
import { useAuthActions, useAuthData } from "@/modules/auth/context";
import { redirect, useRouter } from "next/navigation";
import useLeftTime from "@/hooks/use-left-time";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { sendOtp } from "@/modules/auth/actions/send-otp";
import { toast } from "sonner";
import { signInWithOtp } from "@/modules/auth/actions/sign-in-with-otp";
import { isOk } from "@/lib/utils/is-ok";
import { Label } from "@/components/label";
import { ErrorName } from "@/types/error";
import { ArrowRightIcon } from "lucide-react";
import { Heading } from "@/components/heading";
import { useCallbackUrl } from "@/lib/utils/router";

type EnterPhoneProps = {
  className?: string;
};

export function EnterOtpForm(props: EnterPhoneProps) {
  const { className } = props;

  const router = useRouter();

  const callbackUrl = useCallbackUrl();

  const [isPending, startTransition] = useTransition();

  const form = useForm<EnterOtp>({
    disabled: isPending,
    resolver: zodResolver(enterOtpSchema),
  });

  const [expiresAt, setExpiresAt] = useState<Date | null>(null);

  const authContext = useAuthData();

  useEffect(() => {
    if (!authContext.countryCode || !authContext?.phone) return;
    form.setValue("countryCode", authContext.countryCode);
    form.setValue("phone", authContext.phone);
    form.setValue("iAcceptTerms", true);
    setExpiresAt(authContext?.otpExpiresAt || null);
  }, [authContext.countryCode, authContext.phone, authContext?.otpExpiresAt, form]);

  const handleSubmit = form.handleSubmit((data) => {
    console.log("hi")
    startTransition(async () => {
      const session = await signInWithOtp(data);
      if (!isOk(session)) {
        switch (session.error.name) {
          case ErrorName.InvalidOtp: {
            form.setError("otp", {
              message: session.error.message,
            });
          }
        }
        return;
      }
      router.refresh();
      router.push(callbackUrl || routes.home);
    });
  });

  if (!authContext.countryCode || !authContext?.phone) redirect(routes.auth.enterPhone);

  return (
    <form className={cn("pointer-events-auto flex flex-col", className)} onSubmit={handleSubmit}>
      <Link href="/">
        <ThemeImage
          srcLight="/images/logo.png"
          srcDark="/images/logo.png"
          className="mx-auto size-28 cursor-pointer rounded-rounded object-contain"
          width={200}
          height={200}
          alt="logo"
        />
      </Link>
      <Heading as="h1" variant="h2" className="text-center font-extrabold text-primary">
        زنـبـــــــــور
      </Heading>
      <Controller
        control={form.control}
        name="otp"
        render={({ field, fieldState }) => {
          return (
            <InputField className="mt-6" required>
              <Label htmlFor="otp" className="text-center">
                {["کد یکبار مصرف ارسال شده به", authContext.phone, "را وارد کنید."].join(" ")}
              </Label>
              <OtpInput
                id="otp"
                autoFocus
                className="mx-auto"
                onComplete={handleSubmit}
                inputMode="numeric"
                type="tel"
                invalid={!!fieldState.error?.message}
                {...field}
              />
              <ErrorMessage className="text-center">{fieldState.error?.message}</ErrorMessage>
            </InputField>
          );
        }}
      />
      <div className="mt-6 flex h-9 items-center justify-center">
        {expiresAt && (
          <Text className="flex gap-1 text-sm">
            <LeftTime deadline={expiresAt} onReachedEnd={() => setExpiresAt(null)} />
            مانده تا دریافت مجدد
          </Text>
        )}
        {!expiresAt && (
          <SendOtpButton
            disabled={form.formState.disabled}
            data={{
              countryCode: authContext.countryCode,
              phone: authContext.phone,
              iAcceptTerms: true,
            }}
            onSuccess={() => {
              form.clearErrors();
              form.setValue("otp", "");
              form.setFocus("otp");
            }}
          />
        )}
      </div>
      <div className="mt-6 flex gap-2">
        <Button color="secondary" onClick={router.back}>
          <ArrowRightIcon data-slot="icon" />
        </Button>
        <Button type="submit" className="grow" disabled={isPending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            data-slot="start-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
            />
          </svg>
          ورود
          {isPending && <Loading />}
        </Button>
      </div>
      <div className="mt-6 flex flex-col">
        <Text variant="caption">
          <span>ورود شما به معنای پذیرش </span>
          <Link href={routes.terms} className="font-bold text-primary">
            شرایط زنبور
          </Link>
          <span> و </span>
          <Link href={routes.privacy} className="font-bold text-primary">
            قوانین حریم خصوصی
          </Link>
          <span> است.</span>
        </Text>
      </div>
    </form>
  );
}

type SendOtpButtonProps = {
  data: EnterPhone;
  onSuccess: () => void;
  className?: string;
  disabled?: boolean;
};

function SendOtpButton(props: SendOtpButtonProps) {
  const { data, onSuccess, className, disabled } = props;

  const { updateOtpExpiresAt } = useAuthActions();

  const [isPending, startTransition] = useTransition();

  const handleSendOtp = () =>
    startTransition(async () => {
      const res = await sendOtp(data);
      if (!isOk(res)) {
        toast.error("در ارسال کد یکبار مصرف خطایی رخ داد.");
        return;
      }
      onSuccess();
      toast.success("کد یکبار مصرف با موفقیت ارسال شد.");
      updateOtpExpiresAt({
        otpExpiresAt: res.data.otpExpiresAt,
      });
    });

  return (
    <Button
      variant="plain"
      color="secondary"
      className={className}
      disabled={isPending || disabled}
      onClick={handleSendOtp}
    >
      ارسال مجدد کد یکبار مصرف
      {isPending && <Loading />}
    </Button>
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

type LeftTimeProps = {
  deadline: Date;
  onReachedEnd: () => void;
  className?: string;
};

function LeftTime(props: LeftTimeProps) {
  const { deadline, onReachedEnd, className } = props;

  const { minutes, seconds } = useLeftTime({
    deadline: deadline,
    onReachedEnd,
  });

  return (
    <span className={cn("flex [direction:ltr]", className)}>
      {[pad(minutes), pad(seconds)].map((segment, index) => {
        return (
          <Fragment key={index}>
            {index !== 0 && <span className="mx-0.5">:</span>}
            <span className="flex">
              {segment
                .toString()
                .split("")
                .map((digit, index) => {
                  return <Animate key={index} value={digit} />;
                })}
            </span>
          </Fragment>
        );
      })}
    </span>
  );
}

function Animate({ value }: { value: string | number }) {
  return (
    <span className="relative flex overflow-hidden">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={value}
          initial={{
            y: -20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: 20,
            opacity: 0,
          }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
