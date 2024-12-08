import { z } from "zod";
import { PHONE_REGEX } from "@/lib/constants/regex";
import { toEnglishDigits } from "@/lib/utils/to-english-digits";

export const enterPhoneSchema = z.object({
  countryCode: z.string(),
  phone: z
    .string({
      required_error: "شماره موبایل خود را وارد نکرده‌اید.",
    })
    .transform((value) => {
      const normalized = toEnglishDigits(value.trim());
      return normalized.length === 10 ? `0${normalized}` : normalized;
    })
    .refine((value) => PHONE_REGEX.test(value), {
      message: "شماره موبایل وارد شده اشتباه می‌باشد.",
    }),
  iAcceptTerms: z
    .boolean({
      required_error: "شرایط را نپذیرفته‌اید.",
    })
    .refine((value) => value, {
      message: "شرایط را نپذیرفته‌اید.",
    }),
});

export const enterOtpSchema = z
  .object({
    otp: z
      .string({
        required_error: "کد یکبار مصرف را وارد نکرده‌اید.",
      })
      .length(5, {
        message: "کد یکبار مصرف را کامل وارد نکرده‌اید.",
      })
      .transform((value) => toEnglishDigits(value)),
  })
  .merge(enterPhoneSchema);
