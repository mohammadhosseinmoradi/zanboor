import { z } from "zod";
import { EMAIL_REGEX, PHONE_REGEX } from "@/lib/constants/regex";

export const enterUserIdSchema = z.object({
  countryCode: z.string(),
  userId: z
    .string({
      required_error: "شماره موبایل یا ایمیل خود را وارد نکرده‌اید.",
    })
    .regex(PHONE_REGEX, {
      message: "شماره موبایل وارد شده اشتباه می‌باشد.",
    })
    .or(
      z.string().regex(EMAIL_REGEX, {
        message: "ایمل وارد شده اشتباه می‌باشد.",
      })
    ),
});

export const enterOtpSchema = z
  .object({
    otp: z.string({
        required_error: "کد یک بار مصرف را وارد نکرده‌اید."
    }).length(5, {
      message: "کد یک بار مصرف را کامل وارد نکرده‌اید.",
    }),
  })
  .merge(enterUserIdSchema);
