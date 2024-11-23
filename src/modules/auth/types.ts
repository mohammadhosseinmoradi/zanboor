import { z } from "zod";
import { enterOtpSchema, enterUserIdSchema } from "@/modules/auth/schema";
import { Role, User } from "@prisma/client";

export type EnterUserId = z.infer<typeof enterUserIdSchema>;

export type EnterOtp = z.infer<typeof enterOtpSchema>;

export type SessionPayload = {
  userId: string;
  role: Role;
};

export type Session = {
  user: User;
};
