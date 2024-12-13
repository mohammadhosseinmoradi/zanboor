import {
  BeautyLevel,
  CarStatus,
  ChildrenStatus,
  EducationLevel,
  EmploymentStatus,
  Gender,
  HealthStatus,
  HousingStatus,
  MaritalStatus,
  Role,
  SkinColor,
  StyleLevel,
} from "@prisma/client";
import { z } from "zod";
import { LocationDtoCreateInputParamsSchema } from "@/modules/profile/schema";

export const userProfilePersonalDtoSchema = z.object({
  id: z.string(),
  displayName: z.string(),
  gender: z.nativeEnum(Gender),
  image: z.string().nullable().optional(),
  bio: z.string(),
  maritalStatus: z.nativeEnum(MaritalStatus),
  healthStatus: z.nativeEnum(HealthStatus),
  healthDescription: z.string().nullable().optional(),
  childrenStatus: z.nativeEnum(ChildrenStatus),
  greatestChildAge: z.number().nullable().optional(),
  location: LocationDtoCreateInputParamsSchema.nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const userProfileEducationAndCareerDtoSchema = z.object({
  id: z.string(),
  educationLevel: z.nativeEnum(EducationLevel),
  employmentStatus: z.nativeEnum(EmploymentStatus),
  fieldOfStudy: z.string(),
  jobTitle: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const userProfilePhysicalAttributesDtoSchema = z.object({
  id: z.string(),
  height: z.number(),
  weight: z.number(),
  skinColor: z.nativeEnum(SkinColor),
  beautyLevel: z.nativeEnum(BeautyLevel),
  styleLevel: z.nativeEnum(StyleLevel),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const userProfileFinancialStatusDtoSchema = z.object({
  id: z.string(),
  personalIncome: z.number(),
  housingStatus: z.nativeEnum(HousingStatus),
  carStatus: z.nativeEnum(CarStatus),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const userProfileDtoSchema = z.object({
  id: z.string(),
  personal: userProfilePersonalDtoSchema,
  educationAndCareer: userProfileEducationAndCareerDtoSchema,
  physicalAttributes: userProfilePhysicalAttributesDtoSchema,
  financialStatus: userProfileFinancialStatusDtoSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const userDtoSchema = z.object({
  id: z.string(),
  phoneVerifiedAt: z.date().nullable().optional(),
  role: z.nativeEnum(Role),
  profile: userProfileDtoSchema,
});
