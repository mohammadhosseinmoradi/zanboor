import {
  BeautyLevel,
  CarStatus,
  ChildrenStatus,
  EducationLevel,
  EmploymentStatus,
  Ethnicity,
  Gender,
  HealthStatus,
  HousingStatus,
  MaritalStatus,
  PersonalityType,
  Role,
  SkinColor,
  StyleLevel,
} from "@prisma/client";
import { z } from "zod";
import { LocationDtoCreateInputParamsSchema } from "@/modules/profile/schema";

export const familyInfoUserDtoSchema = z.object({
  id: z.string(),
  fatherEducation: z.nativeEnum(EducationLevel),
  motherEducation: z.nativeEnum(EducationLevel),
  fatherEthnicity: z.nativeEnum(Ethnicity),
  motherEthnicity: z.nativeEnum(Ethnicity),
  siblingPosition: z.number().int(),
  brothersCount: z.number().int(),
  sistersCount: z.number().int(),
  hasMarriedSiblings: z.boolean().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const marriagePreferencesUserDtoSchema = z.object({
  id: z.string(),
  ageMin: z.number().int(),
  ageMax: z.number().int(),
  maritalStatuses: z.array(z.nativeEnum(MaritalStatus)),
  childrenStatus: z.nativeEnum(ChildrenStatus).nullable().optional(),
  educationLevels: z.array(z.nativeEnum(EducationLevel)),
  heightMin: z.number().int().nullable().optional(),
  heightMax: z.number().int().nullable().optional(),
  skinColors: z.array(z.nativeEnum(SkinColor)),
  healthStatuses: z.array(z.nativeEnum(HealthStatus)),
  incomeMin: z.number().nullable().optional(),
  incomeMax: z.number().nullable().optional(),
  housingStatuses: z.array(z.nativeEnum(HousingStatus)),
  carStatuses: z.array(z.nativeEnum(CarStatus)),
  preferredPersonalityTypes: z.array(z.nativeEnum(PersonalityType)),
  additionalNote: z.string().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const profilePersonalUserDtoSchema = z.object({
  id: z.string(),
  displayName: z.string(),
  image: z.string().nullable().optional(),
  bio: z.string(),
  gender: z.nativeEnum(Gender),
  birthdate: z.date(),
  maritalStatus: z.nativeEnum(MaritalStatus),
  healthStatus: z.nativeEnum(HealthStatus),
  healthDescription: z.string().nullable().optional(),
  childrenStatus: z.nativeEnum(ChildrenStatus),
  greatestChildAge: z.number().nullable().optional(),
  location: LocationDtoCreateInputParamsSchema.nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const profileEducationAndCareerUserDtoSchema = z.object({
  id: z.string(),
  educationLevel: z.nativeEnum(EducationLevel),
  employmentStatus: z.nativeEnum(EmploymentStatus),
  fieldOfStudy: z.string(),
  jobTitle: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const profilePhysicalAttributesUserDtoSchema = z.object({
  id: z.string(),
  height: z.number(),
  weight: z.number(),
  skinColor: z.nativeEnum(SkinColor),
  beautyLevel: z.nativeEnum(BeautyLevel),
  styleLevel: z.nativeEnum(StyleLevel),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const profileFinancialStatusUserDtoSchema = z.object({
  id: z.string(),
  personalIncome: z.number(),
  housingStatus: z.nativeEnum(HousingStatus),
  carStatus: z.nativeEnum(CarStatus),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const profileUserDtoSchema = z.object({
  id: z.string(),
  personal: profilePersonalUserDtoSchema,
  educationAndCareer: profileEducationAndCareerUserDtoSchema,
  physicalAttributes: profilePhysicalAttributesUserDtoSchema,
  familyInfo: familyInfoUserDtoSchema,
  financialStatus: profileFinancialStatusUserDtoSchema,
  marriagePreferences: marriagePreferencesUserDtoSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const userDtoSchema = z.object({
  id: z.string(),
  phoneVerifiedAt: z.date().nullable().optional(),
  role: z.nativeEnum(Role),
  profile: profileUserDtoSchema,
});
