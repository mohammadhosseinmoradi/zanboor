"use server";

import type { EnterOtp } from "@/modules/auth/types";
import { EMAIL_REGEX, PHONE_REGEX } from "@/lib/constants/regex";
import { getNormalizePhone } from "@/lib/utils/get-normalize-phone";
import prisma from "@/lib/db";
import { Result } from "@/types/result";
import { ErrorName } from "@/types/error";
import { createSession } from "@/modules/auth/session";

/**
 * Return session if success
 * @param params
 * @constructor
 */
export async function SignInWithOtp(params: EnterOtp): Promise<Result<string>> {
  const { countryCode, userId, otp: otpCode } = params;

  let phone: string | null = null;
  if (userId.match(PHONE_REGEX))
    phone = getNormalizePhone({
      countryCode,
      phone: userId,
    });

  let email: string | null = null;
  if (userId.match(EMAIL_REGEX)) email = userId;

  let user = await prisma.user.findFirst({
    where: {
      OR: [
        {
          phone,
        },
        {
          email,
        },
      ],
    },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        phone,
        email,
      },
    });
  }

  const otp = await prisma.otp.findFirst({
    where: {
      code: otpCode,
      OR: [
        {
          phone,
        },
        {
          email,
        },
      ],
    },
  });

  if (!otp || otp.expiresAt < new Date())
    return {
      error: {
        name: ErrorName.InvalidOtp,
        message: "کد یکبار مصرف نامعتبر می‌باشد.",
      },
    };

  const session = await createSession({
    userId: user.id,
    role: user.role,
  });

  return {
    data: session,
  };
}
