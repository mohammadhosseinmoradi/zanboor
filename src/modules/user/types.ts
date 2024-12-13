import { z } from "zod";
import { userDtoSchema, userProfileDtoSchema } from "@/modules/user/schema";

export type UserDto = z.infer<typeof userDtoSchema>;

export type UserProfileDto = z.infer<typeof userProfileDtoSchema>;
