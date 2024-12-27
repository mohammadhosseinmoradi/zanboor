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
  SkinColor,
  StyleLevel
} from "@prisma/client";
import { z } from "zod";

// Marriage preferences ----------------------------------------------------------------------------------------
export const marriagePreferencesDtoCreateInputParamsSchema = z.object({
  ageMin: z.number().int().min(0),
  ageMax: z.number().int().min(0),
  maritalStatuses: z.array(z.nativeEnum(MaritalStatus)),
  childrenStatus: z.nativeEnum(ChildrenStatus).nullable().optional(),
  educationLevels: z.array(z.nativeEnum(EducationLevel)),
  heightMin: z.number().int().min(0).nullable().optional(),
  heightMax: z.number().int().min(0).nullable().optional(),
  skinColors: z.array(z.nativeEnum(SkinColor)),
  healthStatuses: z.array(z.nativeEnum(HealthStatus)),
  incomeMin: z.number().min(0).nullable().optional(),
  incomeMax: z.number().min(0).nullable().optional(),
  housingStatuses: z.array(z.nativeEnum(HousingStatus)),
  carStatuses: z.array(z.nativeEnum(CarStatus)),
  preferredPersonalityTypes: z.array(z.nativeEnum(PersonalityType)),
  additionalNote: z.string().nullable().optional()
});

export const marriagePreferencesDtoSchema =
  marriagePreferencesDtoCreateInputParamsSchema.extend({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
  });

// Financial status ----------------------------------------------------------------------------------------
export const financialStatusDtoCreateInputParamsSchema = z.object({
  personalIncome: z.number(),
  housingStatus: z.nativeEnum(HousingStatus),
  carStatus: z.nativeEnum(CarStatus)
});

export const financialStatusDtoSchema =
  financialStatusDtoCreateInputParamsSchema.extend({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
  });

// Education and career ----------------------------------------------------------------------------
export const educationAndCareerDtoCreateInputParamsSchema = z.object({
  educationLevel: z.nativeEnum(EducationLevel),
  employmentStatus: z.nativeEnum(EmploymentStatus),
  fieldOfStudy: z.string(),
  jobTitle: z.string()
});

export const educationAndCareerDtoSchema =
  educationAndCareerDtoCreateInputParamsSchema.extend({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
  });

// Family info -----------------------------------------------------------------------------
export const familyInfoDtoCreateInputParamsSchema = z.object({
  fatherEducation: z.nativeEnum(EducationLevel),
  motherEducation: z.nativeEnum(EducationLevel),
  fatherEthnicity: z.nativeEnum(Ethnicity),
  motherEthnicity: z.nativeEnum(Ethnicity),
  siblingPosition: z.number().int(),
  brothersCount: z.number().int(),
  sistersCount: z.number().int(),
  hasMarriedSiblings: z.boolean().nullable().optional()
});

export const familyInfoDtoSchema = familyInfoDtoCreateInputParamsSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});

// Physical attributes -----------------------------------------------------------------------------
export const physicalAttributesDtoCreateInputParamsSchema = z.object({
  height: z.number(),
  weight: z.number(),
  skinColor: z.nativeEnum(SkinColor),
  beautyLevel: z.nativeEnum(BeautyLevel),
  styleLevel: z.nativeEnum(StyleLevel)
});

export const physicalAttributesDtoSchema =
  physicalAttributesDtoCreateInputParamsSchema.extend({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
  });

// Location ----------------------------------------------------------------------------------------
export const LocationDtoCreateInputParamsSchema = z.object({
  cityId: z.string()
});

export const LocationDtoSchema = LocationDtoCreateInputParamsSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});

// Personal ----------------------------------------------------------------------------------------
export const personalDtoCreateInputParamsSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  displayName: z.string(),
  bio: z.string(),
  gender: z.nativeEnum(Gender),
  birthdate: z.date(),
  image: z.string(),
  maritalStatus: z.nativeEnum(MaritalStatus),
  healthStatus: z.nativeEnum(HealthStatus),
  healthDescription: z.string().nullable().optional(),
  childrenStatus: z.nativeEnum(ChildrenStatus),
  greatestChildAge: z.number().nullable().optional(),
  location: LocationDtoCreateInputParamsSchema.nullable().optional()
});

export const personalDtoSchema = personalDtoCreateInputParamsSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});

// Profile -----------------------------------------------------------------------------------------
export const profileDtoSchema = z.object({
  id: z.string(),
  personal: personalDtoSchema,
  physicalAttributes: physicalAttributesDtoSchema,
  familyInfo: familyInfoDtoSchema,
  educationAndCareer: educationAndCareerDtoSchema,
  financialStatus: financialStatusDtoSchema,
  marriagePreferences: marriagePreferencesDtoSchema
});

// User ----------------------------------------------------------------------------------------------------------------
export const userDtoSchema = z.object({
  id: z.string(),
  profile: profileDtoSchema
});
