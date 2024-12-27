"use server";

import type { EnterPhone } from "@/modules/auth/types";
import { getNormalizePhone } from "@/lib/utils/get-normalize-phone";
import { PHONE_REGEX } from "@/lib/constants/regex";
import prisma from "@/lib/db";
import { Result } from "@/types/result";
import { ErrorName } from "@/types/error";

type SendOtpResponse = {
  otpExpiresAt: Date;
};

export async function sendOtp(
  params: EnterPhone
): Promise<Result<SendOtpResponse>> {
  const { countryCode, phone } = params;

  if (!phone.match(PHONE_REGEX))
    return {
      error: {
        name: ErrorName.BadRequest,
        message: "شماره موبایل اشتباه می‌باشد."
      }
    };

  const normalizePhone = getNormalizePhone({
    countryCode,
    phone
  });

  let otp = await prisma.otp.findFirst({
    where: { phone: normalizePhone }
  });

  // const newOtp = generateOtp();
  const newOtp = "11111";
  const newOtpExpiresAt = new Date(
    new Date().setSeconds(new Date().getSeconds() + 120)
  );

  if (!otp) {
    otp = await prisma.otp.create({
      data: {
        phone: normalizePhone,
        code: newOtp,
        expiresAt: newOtpExpiresAt
      }
    });
  }

  if (otp.expiresAt < new Date()) {
    otp = await prisma.otp.update({
      data: {
        phone: normalizePhone,
        code: newOtp,
        expiresAt: newOtpExpiresAt
      },
      where: {
        id: otp.id
      }
    });
  }

  return {
    data: {
      otpExpiresAt: otp.expiresAt
    }
  };
}
