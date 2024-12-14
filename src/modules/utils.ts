import {
  BeautyLevel,
  CarStatus,
  EducationLevel,
  EmploymentStatus,
  Gender,
  HousingStatus,
  MaritalStatus,
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
