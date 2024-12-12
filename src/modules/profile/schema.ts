import { EducationLevel, EmploymentStatus, Gender, MaritalStatus, SkinColor } from "@prisma/client";
import { z } from "zod";

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
  skinColor: z.nativeEnum(SkinColor),
  weight: z.number(),
  height: z.number(),
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
});

export const personalDtoSchema = personalDtoCreateInputParamsSchema.extend({
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
});
