import { z } from "zod";
import { enterOtpSchema, enterUserIdSchema } from "@/modules/auth/schema";

export type EnterUserId = z.infer<typeof enterUserIdSchema>;

export type EnterOtp = z.infer<typeof enterOtpSchema>;
