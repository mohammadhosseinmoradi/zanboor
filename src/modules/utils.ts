import { Gender } from "@prisma/client";

export function getGenderTranslated(gender: Gender): string {
  switch (gender) {
    case Gender.Male: {
      return "آقا";
    }
    case Gender.Female: {
      return "خانم";
    }
    case Gender.Other: {
      return "نامشخص";
    }
  }
}
