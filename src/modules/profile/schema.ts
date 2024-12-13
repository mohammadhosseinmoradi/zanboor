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
  SkinColor,
  StyleLevel,
} from "@prisma/client";
import { z } from "zod";

// Location ----------------------------------------------------------------------------------------
export const LocationDtoCreateInputParamsSchema = z.object({
  cityId: z.string(),
});

export const LocationDtoSchema = LocationDtoCreateInputParamsSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Education and career ----------------------------------------------------------------------------
export const educationAndCareerDtoCreateInputParamsSchema = z.object({
  educationLevel: z.nativeEnum(EducationLevel),
  employmentStatus: z.nativeEnum(EmploymentStatus),
  fieldOfStudy: z.string(),
  jobTitle: z.string(),
});

export const educationAndCareerDtoSchema = educationAndCareerDtoCreateInputParamsSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Physical attributes -----------------------------------------------------------------------------
export const physicalAttributesDtoCreateInputParamsSchema = z.object({
  height: z.number(),
  weight: z.number(),
  skinColor: z.nativeEnum(SkinColor),
  beautyLevel: z.nativeEnum(BeautyLevel),
  styleLevel: z.nativeEnum(StyleLevel),
});

export const physicalAttributesDtoSchema = physicalAttributesDtoCreateInputParamsSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Personal ----------------------------------------------------------------------------------------
export const personalDtoCreateInputParamsSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  displayName: z.string(),
  bio: z.string(),
  gender: z.nativeEnum(Gender),
  image: z.string(),
  maritalStatus: z.nativeEnum(MaritalStatus),
  healthStatus: z.nativeEnum(HealthStatus),
  healthDescription: z.string().nullable().optional(),
  childrenStatus: z.nativeEnum(ChildrenStatus),
  greatestChildAge: z.number().nullable().optional(),
  location: LocationDtoCreateInputParamsSchema.nullable().optional(),
});

export const personalDtoSchema = personalDtoCreateInputParamsSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// FinancialStatus ----------------------------------------------------------------------------------------
export const financialStatusDtoCreateInputParamsSchema = z.object({
  personalIncome: z.number(),
  housingStatus: z.nativeEnum(HousingStatus),
  carStatus: z.nativeEnum(CarStatus),
});

export const financialStatusDtoSchema = financialStatusDtoCreateInputParamsSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Profile -----------------------------------------------------------------------------------------
export const profileDtoSchema = z.object({
  id: z.string(),
  personal: personalDtoSchema,
  physicalAttributes: physicalAttributesDtoSchema,
  educationAndCareer: educationAndCareerDtoSchema,
  financialStatus: financialStatusDtoSchema,
});

export const userDtoSchema = z.object({
  id: z.string(),
  profile: profileDtoSchema,
});
