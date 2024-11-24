"use client";

import { Button } from "@/components/button";
import { Loading } from "@/components/loading";
import { InputField } from "@/components/input-field";
import { Controller, useForm } from "react-hook-form";
import ErrorMessage from "@/components/error-message";
import { Fragment, useEffect, useState, useTransition } from "react";
import { Text } from "@/components/text";
import { ConditionLink } from "@/components/condition-link";
import { ThemeImage } from "@/components/theme-image";
import { Link } from "@/components/link";
import { routes } from "@/lib/constants/routes";
import OtpInput from "@/components/otp-input/otp-input";
import type { EnterUserId, SignInWithOtp } from "@/modules/auth/types";
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
import { Input } from "@/components/input";
import { ErrorName } from "@/types/error";

type EnterPhoneProps = {
  logoLink?: string;
  onClose?: () => void;
  className?: string;
};

export function SignInWithOtpForm(props: EnterPhoneProps) {
  const { logoLink, onClose, className } = props;

  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<SignInWithOtp>({
    disabled: isPending,
    resolver: zodResolver(enterOtpSchema),
  });

  const [expiresAt, setExpiresAt] = useState<Date | null>(null);

  const authContext = useAuthData();

  useEffect(() => {
    if (!authContext.countryCode || !authContext?.userId) return;
    form.setValue("countryCode", authContext.countryCode);
    form.setValue("userId", authContext.userId);
    if (authContext?.user?.firstName) form.setValue("firstName", authContext?.user?.firstName);
    if (authContext?.user?.lastName) form.setValue("lastName", authContext?.user?.lastName);
    if (authContext?.user?.displayName)
      form.setValue("displayName", authContext?.user?.displayName);
    setExpiresAt(authContext?.otpExpiresAt || null);
  }, [
    authContext.countryCode,
    authContext?.otpExpiresAt,
    authContext.user,
    authContext.userId,
    form,
  ]);

  const handleSubmit = form.handleSubmit((data) => {
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
      router.push(routes.home);
    });
  });

  if (!authContext.countryCode || !authContext?.userId) redirect(routes.auth.enterUserId);

  return (
    <form className={cn("pointer-events-auto flex flex-col", className)} onSubmit={handleSubmit}>
      <ConditionLink href={logoLink}>
        <ThemeImage
          srcLight="/images/logo.jpg"
          srcDark="/images/logo.jpg"
          className="mx-auto size-28 cursor-pointer rounded-rounded object-contain"
          width={200}
          height={200}
          onClick={onClose}
          alt=""
        />
      </ConditionLink>
      <Controller
        control={form.control}
        name="otp"
        render={({ field, fieldState }) => {
          return (
            <InputField className="mt-6" required>
              <Label htmlFor="otp" className="text-center">
                {["کد یکبار مصرف ارسال شده به", authContext.userId, "را وارد کنید."].join(" ")}
              </Label>
              <OtpInput
                id="otp"
                autoFocus
                className="mx-auto"
                onComplete={() => {
                  if (!form.getValues("displayName")) return;
                  void handleSubmit();
                }}
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
            مانده تا دریافت مجدد کد یکبار مصرف
          </Text>
        )}
        {!expiresAt && (
          <SendOtpButton
            disabled={form.formState.disabled}
            data={{
              countryCode: authContext.countryCode,
              userId: authContext.userId,
            }}
            onSuccess={() => {
              form.clearErrors();
              form.setValue("otp", "");
              form.setFocus("otp");
            }}
          />
        )}
      </div>
      {!authContext?.user?.displayName && (
        <Controller
          control={form.control}
          name="displayName"
          render={({ field, fieldState }) => {
            return (
              <InputField className="mt-4" required>
                <Label>نام نمایشی</Label>
                <Input invalid={!!fieldState.error?.message} {...field} />
                <ErrorMessage>{fieldState.error?.message}</ErrorMessage>
              </InputField>
            );
          }}
        />
      )}
      <Button type="submit" className="mt-6 w-full shrink-0" disabled={isPending}>
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
      <div className="mt-6 flex flex-col">
        <Text variant="caption">
          <span>ورود شما به معنای پذیرش </span>
          <Link href={routes.terms} className="font-bold text-primary" onClick={onClose}>
            شرایط زنبور
          </Link>
          <span> و </span>
          <Link href={routes.privacy} className="font-bold text-primary" onClick={onClose}>
            قوانین حریم خصوصی
          </Link>
          <span> است.</span>
        </Text>
      </div>
    </form>
  );
}

type SendOtpButtonProps = {
  data: EnterUserId;
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
