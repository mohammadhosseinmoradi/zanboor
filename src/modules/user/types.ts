import { z } from "zod";
import {
  userDtoSchema,
  profileUserDtoSchema,
  marriagePreferencesUserDtoSchema
} from "@/modules/user/schema";

export type UserDto = z.infer<typeof userDtoSchema>;

export type ProfileUserDto = z.infer<typeof profileUserDtoSchema>;

export type MarriagePreferencesUserDto = z.infer<
  typeof marriagePreferencesUserDtoSchema
>;
