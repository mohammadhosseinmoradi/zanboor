import { z } from "zod";
import { EMAIL_REGEX, PHONE_REGEX } from "@/lib/constants/regex";

export const enterUserIdSchema = z.object({
  countryCode: z.string(),
  userId: z
    .string({
      required_error: "شماره موبایل یا ایمیل خود را وارد نکرده‌اید.",
    }).and(z.string().regex(PHONE_REGEX, {
      message: "شماره موبایل یا ایمیل وارد شده اشتباه می‌باشد.",
    })
      .or(
        z.string().regex(EMAIL_REGEX, {
          message: "شماره موبایل یا ایمیل وارد شده اشتباه می‌باشد.",
        })
      )),
});

export const enterOtpSchema = z
  .object({
    firstName: z
      .string()
      .min(3, {
        message: "نام باید حداقل ۳ حرف باشد.",
      })
      .max(64, {
        message: "نام باید حداکثر ۶۴ حرف باشد.",
      })
      .or(z.string().optional()),
    lastName: z
      .string()
      .min(3, {
        message: "نام خانوادگی باید حداقل ۳ حرف باشد.",
      })
      .max(64, {
        message: "نام خانوادگی باید حداکثر ۶۴ حرف باشد.",
      })
      .or(z.string().optional()),
    displayName: z
      .string({
        required_error: "نام نمایشی را وارد نکرده‌اید.",
      })
      .min(3, {
        message: "نام نمایشی باید حداقل ۳ حرف باشد.",
      })
      .max(32, {
        message: "نام نمایشی باید حداکثر ۶۴ حرف باشد.",
      }),
    otp: z
      .string({
        required_error: "کد یکبار مصرف را وارد نکرده‌اید.",
      })
      .length(5, {
        message: "کد یکبار مصرف را کامل وارد نکرده‌اید.",
      }),
  })
  .merge(enterUserIdSchema);
