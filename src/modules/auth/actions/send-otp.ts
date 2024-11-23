"use server";

import type { EnterUserId } from "@/modules/auth/types";
import { getNormalizePhone } from "@/lib/utils/get-normalize-phone";
import { EMAIL_REGEX, PHONE_REGEX } from "@/lib/constants/regex";
import prisma from "@/lib/db";
import { generateOtp } from "@/lib/utils/generate-otp";
import { Result } from "@/types/result";
import { Otp } from "@prisma/client";

export async function sendOtp(
  params: EnterUserId
): Promise<Result<Pick<Otp, "id" | "phone" | "email" | "expiresAt">>> {
  const { countryCode, userId } = params;

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

  let otp = await prisma.otp.findFirst({
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
    select: {
      id: true,
      phone: true,
      email: true,
      expiresAt: true,
    },
  });

  const newOtp = generateOtp();
  const newOtpExpiresAt = new Date(new Date().setSeconds(new Date().getSeconds() + 60));

  if (!otp) {
    otp = await prisma.otp.create({
      data: {
        phone,
        email,
        code: newOtp,
        expiresAt: newOtpExpiresAt,
      },
    });
  }

  if (otp.expiresAt < new Date()) {
    otp = await prisma.otp.update({
      data: {
        phone,
        email,
        code: newOtp,
        expiresAt: newOtpExpiresAt,
      },
      where: {
        id: otp.id,
      },
      select: {
        id: true,
        phone: true,
        email: true,
        expiresAt: true,
      },
    });
  }

  return {
    data: otp,
  };
}
