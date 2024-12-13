import { z } from "zod";
import {
  educationAndCareerDtoSchema,
  personalDtoSchema,
  physicalAttributesDtoSchema,
  profileDtoSchema,
  userDtoSchema,
} from "@/modules/profile/schema";

export type UserDto = z.infer<typeof userDtoSchema>;

export type ProfileDto = z.infer<typeof profileDtoSchema>;

export type PersonalDto = z.infer<typeof personalDtoSchema>;

export type PhysicalAttributesDto = z.infer<typeof physicalAttributesDtoSchema>;

export type EducationAndCareerDto = z.infer<typeof educationAndCareerDtoSchema>;
