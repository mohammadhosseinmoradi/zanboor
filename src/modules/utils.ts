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
  StyleLevel,
} from "@prisma/client";

export function getGenderTranslated(gender: Gender): string {
  switch (gender) {
    case Gender.Male: {
      return "آقا";
    }
    case Gender.Female: {
      return "خانم";
    }
    default: {
      return "نامشخص";
    }
  }
}

export function getMaritalStatusTranslated(maritalStatus: MaritalStatus): string {
  switch (maritalStatus) {
    case MaritalStatus.Single: {
      return "مجرد";
    }
    case MaritalStatus.Married: {
      return "متاهل";
    }
    case MaritalStatus.Divorced: {
      return "طلاق گرفته";
    }
    case MaritalStatus.Widowed: {
      return "بیوه";
    }
  }
}

export function getSkinColorTranslated(skinColor: SkinColor): string {
  switch (skinColor) {
    case SkinColor.White: {
      return "سفید";
    }
    case SkinColor.Wheatish: {
      return "گندمی";
    }
    case SkinColor.Olive: {
      return "سبزه";
    }
    case SkinColor.Black: {
      return "مشکی";
    }
  }
}

export function getEmploymentStatusTranslated(employmentStatus: EmploymentStatus): string {
  switch (employmentStatus) {
    case EmploymentStatus.Employed: {
      return "شاغل";
    }
    case EmploymentStatus.Unemployed: {
      return "بی‌کار";
    }
  }
}

export function getEducationLevelTranslated(educationLevel: EducationLevel): string {
  switch (educationLevel) {
    case EducationLevel.NoEducation: {
      return "فاقد تحصیلات رسمی";
    }
    case EducationLevel.BelowDiploma: {
      return "زیر دیپلم";
    }
    case EducationLevel.Diploma: {
      return "دیپلم";
    }
    case EducationLevel.Associate: {
      return "فوق دیپلم";
    }
    case EducationLevel.Bachelors: {
      return "کارشناسی";
    }
    case EducationLevel.Masters: {
      return "کارشناسی ارشد";
    }
    case EducationLevel.Doctorate: {
      return "دکترا";
    }
  }
}

export function getBeautyLevelTranslated(beautyLevel: BeautyLevel): string {
  switch (beautyLevel) {
    case BeautyLevel.VeryLow: {
      return "خیلی کم";
    }
    case BeautyLevel.Low: {
      return "کم";
    }
    case BeautyLevel.Medium: {
      return "متوسط";
    }
    case BeautyLevel.High: {
      return "زیاد";
    }
    case BeautyLevel.VeryHigh: {
      return "خیلی زیاد";
    }
  }
}

export function getStyleLevelTranslated(styleLevel: StyleLevel): string {
  switch (styleLevel) {
    case StyleLevel.VeryLow: {
      return "خیلی کم";
    }
    case StyleLevel.Low: {
      return "کم";
    }
    case StyleLevel.Medium: {
      return "متوسط";
    }
    case StyleLevel.High: {
      return "زیاد";
    }
    case StyleLevel.VeryHigh: {
      return "خیلی زیاد";
    }
  }
}

export function getCarStatusTranslated(carStatus: CarStatus): string {
  switch (carStatus) {
    case CarStatus.NoCar: {
      return "ندارم";
    }
    case CarStatus.HasCar: {
      return "دارم";
    }
  }
}

export function getTheirCarStatusTranslated(carStatus: CarStatus): string {
  switch (carStatus) {
    case CarStatus.NoCar: {
      return "نداشته باشه";
    }
    case CarStatus.HasCar: {
      return "داشته باشه";
    }
  }
}

export function getHousingStatusTranslated(housingStatus: HousingStatus): string {
  switch (housingStatus) {
    case HousingStatus.NoHouse: {
      return "ندارم";
    }
    case HousingStatus.RentedHouse: {
      return "اجاره‌ای";
    }
    case HousingStatus.OwnHouse: {
      return "دارم";
    }
    case HousingStatus.WithFamily: {
      return "با خانواده";
    }
  }
}

export function getTheirHousingStatusTranslated(housingStatus: HousingStatus): string {
  switch (housingStatus) {
    case HousingStatus.NoHouse: {
      return "نداشته باشه";
    }
    case HousingStatus.RentedHouse: {
      return "اجاره‌ای";
    }
    case HousingStatus.OwnHouse: {
      return "داشته باشه";
    }
    case HousingStatus.WithFamily: {
      return "با خانواده";
    }
  }
}

export function getChildrenStatusTranslated(childrenStatus: ChildrenStatus): string {
  switch (childrenStatus) {
    case ChildrenStatus.None: {
      return "ندارم";
    }
    case ChildrenStatus.One: {
      return "یکی دارم";
    }
    case ChildrenStatus.Two: {
      return "دوتا دارم";
    }
    case ChildrenStatus.Three: {
      return "سه‌تا دارم";
    }
    case ChildrenStatus.Four: {
      return "چهارتا دارم";
    }
    case ChildrenStatus.FiveOrMore: {
      return "پنج یا بیشتر دارم";
    }
  }
}

export function getTheirChildrenStatusTranslated(childrenStatus: ChildrenStatus): string {
  switch (childrenStatus) {
    case ChildrenStatus.None: {
      return "نداشته باشه";
    }
    case ChildrenStatus.One: {
      return "یکی";
    }
    case ChildrenStatus.Two: {
      return "دوتا";
    }
    case ChildrenStatus.Three: {
      return "سه‌تا";
    }
    case ChildrenStatus.Four: {
      return "چهارتا";
    }
    case ChildrenStatus.FiveOrMore: {
      return "پنج یا بیشتر";
    }
  }
}

export function getHealthStatusTranslated(healthStatus: HealthStatus): string {
  switch (healthStatus) {
    case HealthStatus.Healthy: {
      return "سالم";
    }
    case HealthStatus.ChronicCondition: {
      return "بیماری خاص";
    }
    case HealthStatus.Disability: {
      return "معلولیت";
    }
  }
}

export function getPersonalityTypeTranslated(personalityType: PersonalityType): string {
  switch (personalityType) {
    case PersonalityType.Introvert: {
      return "درونگرا";
    }
    case PersonalityType.Ambivert: {
      return "میانگرا";
    }
    case PersonalityType.Extrovert: {
      return "برونگرا";
    }
  }
}

export function hasChildrenStatus(maritalStatuses: MaritalStatus[]): boolean {
  return (
    maritalStatuses.length > 0 &&
    (maritalStatuses.includes(MaritalStatus.Married) ||
      maritalStatuses.includes(MaritalStatus.Widowed) ||
      maritalStatuses.includes(MaritalStatus.Divorced))
  );
}

export function getEthnicityTranslated(ethnicity: Ethnicity): string {
  switch (ethnicity) {
    case Ethnicity.Persian:
      return "فارس";
    case Ethnicity.Turkish:
      return "ترک";
    case Ethnicity.Kurdish:
      return "کرد";
    case Ethnicity.Baluchi:
      return "بلوچ";
    case Ethnicity.Arab:
      return "عرب";
    case Ethnicity.Lor:
      return "لر";
    case Ethnicity.Gilaki:
      return "گیلک";
    case Ethnicity.Mazandarani:
      return "مازندرانی";
    case Ethnicity.Talysh:
      return "تالشی";
    case Ethnicity.Armenian:
      return "ارمنی";
    case Ethnicity.Ashuri:
      return "آشوری";
    case Ethnicity.Turkmen:
      return "ترکمن";
    case Ethnicity.Qashqai:
      return "قشقایی";
    case Ethnicity.Afghani:
      return "افغان";
    case Ethnicity.Azeri:
      return "آذری";
    case Ethnicity.Sistani:
      return "سیستانی";
    case Ethnicity.Other:
      return "سایر";
    default:
      return "نامشخص";
  }
}
