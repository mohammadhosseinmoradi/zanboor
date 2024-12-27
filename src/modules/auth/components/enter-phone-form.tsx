"use client";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Loading } from "@/components/loading";
import { InputField } from "@/components/input-field";
import { Label } from "@/components/label";
import { Controller, useForm } from "react-hook-form";
import ErrorMessage from "@/components/error-message";
import { Divider } from "@/components/divider";
import { InputGroup } from "@/components/input-group";
import ListboxDropdown from "@/components/listbox-dropdown";
import { countryOptions } from "@/lib/constants/common";
import { Text } from "@/components/text";
import { ThemeImage } from "@/components/theme-image";
import { Link } from "@/components/link";
import { routes } from "@/lib/constants/routes";
import type { EnterPhone } from "@/modules/auth/types";
import { useEffect, useTransition } from "react";
import { sendOtp } from "@/modules/auth/actions/send-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { enterPhoneSchema } from "@/modules/auth/schema";
import { useRouter } from "next/navigation";
import { useAuthActions } from "@/modules/auth";
import { isOk } from "@/lib/utils/is-ok";
import { cn } from "@/lib/utils";
import { CheckboxField } from "@/components/checkbox-field";
import { Checkbox } from "@/components/checkbox";
import { useCallbackUrl, withCallbackUrl } from "@/lib/utils/router";
import { SlashIcon } from "lucide-react";

type EnterPhoneProps = {
  className?: string;
};

export function EnterPhoneForm(props: EnterPhoneProps) {
  const { className } = props;

  const router = useRouter();
  const callbackUrl = useCallbackUrl();

  const [isPending, startTransition] = useTransition();

  const form = useForm<EnterPhone>({
    disabled: isPending,
    resolver: zodResolver(enterPhoneSchema)
  });

  useEffect(() => {
    form.setValue("countryCode", countryOptions[0].value);
  }, [form]);

  const { setOtp } = useAuthActions();

  const handleSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      const result = await sendOtp(data);
      if (!isOk(result)) return;
      setOtp({
        countryCode: data.countryCode,
        phone: data.phone,
        otpExpiresAt: result.data.otpExpiresAt
      });
      router.push(withCallbackUrl(routes.auth.enterOtp, callbackUrl));
    });
  });

  return (
    <form
      className={cn("pointer-events-auto flex flex-col", className)}
      onSubmit={handleSubmit}
    >
      <Link href="/" className="mx-auto">
        <ThemeImage
          srcLight="/images/logo-with-text.png"
          srcDark="/images/logo-with-text.png"
          className="size-32 cursor-pointer rounded-lg object-contain"
          width={200}
          height={200}
          alt="logo"
        />
      </Link>
      <Controller
        control={form.control}
        name="phone"
        render={({ field, fieldState }) => {
          return (
            <InputField className="mt-6">
              <Label htmlFor="phone">موبایل</Label>
              <InputGroup>
                <ListboxDropdown
                  disabled={form.formState.disabled}
                  variant="plain"
                  className="shrink-0"
                  options={countryOptions}
                  value={countryOptions[0].value}
                />
                <Divider vertical className="my-2.5" />
                <Input
                  autoFocus
                  id="phone"
                  className="[direction:ltr] placeholder:[direction:rtl] rtl:[&_input]:text-right"
                  type="tel"
                  autoComplete="tel"
                  placeholder="شماره موبایل"
                  invalid={!!fieldState.error?.message}
                  {...field}
                  value={field.value || ""}
                />
              </InputGroup>
              <ErrorMessage>{fieldState.error?.message}</ErrorMessage>
            </InputField>
          );
        }}
      />

      <Controller
        control={form.control}
        name="iAcceptTerms"
        render={({ field, fieldState }) => {
          const { value, ...otherProps } = field;
          return (
            <CheckboxField className="mt-6">
              <Label>شرایط و قوانین را مطالعه کردم و می‌پذیرم.</Label>
              <Checkbox checked={value || false} {...otherProps} />
              <ErrorMessage>{fieldState.error?.message}</ErrorMessage>
            </CheckboxField>
          );
        }}
      />

      <div className="mt-6 flex gap-2">
        <Button color="secondary" onClick={() => router.push(routes.home)}>
          <SlashIcon data-slot="icon" />
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
      <Divider className="my-6">یا</Divider>
      <Button
        color="secondary"
        className="w-full shrink-0"
        disabled={isPending}
      >
        <svg
          data-slot="icon"
          width="800px"
          height="800px"
          viewBox="-3 0 262 262"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <path
            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            fill="#4285F4"
          />
          <path
            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            fill="#34A853"
          />
          <path
            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
            fill="#FBBC05"
          />
          <path
            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            fill="#EB4335"
          />
        </svg>
        ورود از طریق گوگل
      </Button>
      <div className="mt-6 flex flex-col">
        <Text variant="caption">
          <span>ورود شما به معنای پذیرش </span>
          <Link href={routes.terms} className="text-primary font-bold">
            شرایط زنبور
          </Link>
          <span> و </span>
          <Link href={routes.privacy} className="text-primary font-bold">
            قوانین حریم خصوصی
          </Link>
          <span> است.</span>
        </Text>
      </div>
    </form>
  );
}
