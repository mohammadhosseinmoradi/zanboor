"use server";

import type { EnterOtp } from "@/modules/auth/types";
import { PHONE_REGEX } from "@/lib/constants/regex";
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
export async function signInWithOtp(params: EnterOtp): Promise<Result<string>> {
  const { countryCode, phone, otp: otpCode } = params;

  if (!phone.match(PHONE_REGEX)) {
    return {
      error: {
        name: ErrorName.BadRequest,
        message: "شماره موبایل اشتباه می‌باشد.",
      },
    };
  }

  const normalizePhone = getNormalizePhone({
    countryCode,
    phone,
  });

  let user = await prisma.user.findFirst({
    where: { phone: normalizePhone },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {},
    });
  }

  const otp = await prisma.otp.findUnique({
    where: { code: otpCode, phone: normalizePhone },
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
