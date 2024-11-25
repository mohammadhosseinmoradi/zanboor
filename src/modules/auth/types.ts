import { z } from "zod";
import { enterOtpSchema, enterPhoneSchema } from "@/modules/auth/schema";
import { Role, User } from "@prisma/client";

export type EnterPhone = z.infer<typeof enterPhoneSchema>;

export type EnterOtp = z.infer<typeof enterOtpSchema>;

export type SessionPayload = {
  userId: string;
  role: Role;
};

export type Session = {
  user: User;
};
