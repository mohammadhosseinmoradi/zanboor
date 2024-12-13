import {
  PrismaClient,
  MaritalStatus,
  Gender,
  SkinColor,
  EducationLevel,
  EmploymentStatus,
  CarStatus,
  HousingStatus,
  HealthStatus,
  BeautyLevel,
  StyleLevel,
  ChildrenStatus,
  PersonalityType,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: {
      phone: "+989922819367",
    },
    update: {
      phone: "+989922819367",
    },
    create: {
      phone: "+989922819367",
      profile: {
        create: {
          personal: {
            create: {
              firstName: "محمد حسین",
              lastName: "مرادی",
              displayName: "محمد",
              image: "",
              bio: "دنبال همسری هستم خوب، خوشکل، باوفا، مهربون، خانواده‌دوست و اهل زندگی مشترک که در کنار هم با عشق و احترام یه زندگی فوق‌العاده‌ای بسازیم.",
              gender: Gender.Male,
              birthdate: new Date(),
              maritalStatus: MaritalStatus.Single,
              healthStatus: HealthStatus.Healthy,
              personalityType: PersonalityType.Ambivert,
            },
          },
          physicalAttributes: {
            create: {
              height: 167,
              skinColor: SkinColor.Wheatish,
              weight: 54,
              beautyLevel: BeautyLevel.High,
              styleLevel: StyleLevel.High,
            },
          },
          educationAndCareer: {
            create: {
              educationLevel: EducationLevel.Diploma,
              employmentStatus: EmploymentStatus.Employed,
              jobTitle: "توسعه دهنده وب",
              fieldOfStudy: "کامپیوتر",
            },
          },
          financialStatus: {
            create: {
              personalIncome: 30_000_000,
              carStatus: CarStatus.HasCar,
              housingStatus: HousingStatus.OwnHouse,
            },
          },
        },
      },
    },
  });

  await prisma.user.upsert({
    where: {
      phone: "+989362364694",
    },
    update: {
      phone: "+989362364694",
    },
    create: {
      phone: "+989362364694",
      profile: {
        create: {
          personal: {
            create: {
              firstName: "امین",
              lastName: "شیبانیان",
              displayName: "کهرو",
              image: "",
              bio: "دنبال یه پارتنر خیلی خوشکل و داغ هستم که پایه همه حالی باشه.",
              gender: Gender.Male,
              birthdate: new Date(),
              maritalStatus: MaritalStatus.Single,
              healthStatus: HealthStatus.Healthy,
              personalityType: PersonalityType.Extrovert,
            },
          },
          physicalAttributes: {
            create: {
              height: 178,
              skinColor: SkinColor.Wheatish,
              weight: 65,
              beautyLevel: BeautyLevel.VeryHigh,
              styleLevel: StyleLevel.VeryHigh,
            },
          },
          educationAndCareer: {
            create: {
              educationLevel: EducationLevel.Bachelors,
              employmentStatus: EmploymentStatus.Employed,
              jobTitle: "توسعه دهنده وب",
              fieldOfStudy: "کامپیوتر",
            },
          },
          financialStatus: {
            create: {
              personalIncome: 100_000_000,
              carStatus: CarStatus.HasCar,
              housingStatus: HousingStatus.OwnHouse,
            },
          },
        },
      },
    },
  });

  await prisma.user.upsert({
    where: {
      phone: "+989333660137",
    },
    update: {
      phone: "+989333660137",
    },
    create: {
      phone: "+989333660137",
      profile: {
        create: {
          personal: {
            create: {
              firstName: "حسین",
              lastName: "آذرشین",
              displayName: "جینگفانگ",
              image: "",
              bio: "خوشگل پایه سفر شاد  قد بلند فقط صیغه",
              gender: Gender.Male,
              birthdate: new Date(),
              maritalStatus: MaritalStatus.Single,
              healthStatus: HealthStatus.Healthy,
              personalityType: PersonalityType.Extrovert,
            },
          },
          physicalAttributes: {
            create: {
              height: 180,
              skinColor: SkinColor.Wheatish,
              weight: 54,
              beautyLevel: BeautyLevel.VeryHigh,
              styleLevel: StyleLevel.VeryHigh,
            },
          },
          educationAndCareer: {
            create: {
              educationLevel: EducationLevel.Diploma,
              employmentStatus: EmploymentStatus.Employed,
              jobTitle: "کافی‌نت",
              fieldOfStudy: "عمران",
            },
          },
          financialStatus: {
            create: {
              personalIncome: 40_000_000,
              carStatus: CarStatus.HasCar,
              housingStatus: HousingStatus.NoHouse,
            },
          },
        },
      },
    },
  });

  await prisma.user.upsert({
    where: {
      phone: "+989922819368",
    },
    update: {
      phone: "+989922819368",
    },
    create: {
      phone: "+989922819368",
      profile: {
        create: {
          personal: {
            create: {
              firstName: "زهرا",
              lastName: "کریمی",
              displayName: "زهرا",
              image: "/images/users/01.jpg",
              bio: "دنبال همسری هستم خوب، خوشکل، باوفا، مهربون، خانواده‌دوست و اهل زندگی مشترک که در کنار هم با عشق و احترام یه زندگی فوق‌العاده‌ای بسازیم.",
              gender: Gender.Female,
              birthdate: new Date(),
              maritalStatus: MaritalStatus.Divorced,
              healthStatus: HealthStatus.Healthy,
              childrenStatus: ChildrenStatus.One,
              greatestChildAge: 4,
              personalityType: PersonalityType.Extrovert,
            },
          },
          physicalAttributes: {
            create: {
              height: 162,
              skinColor: SkinColor.White,
              weight: 62,
              beautyLevel: BeautyLevel.VeryHigh,
              styleLevel: StyleLevel.VeryHigh,
            },
          },
          educationAndCareer: {
            create: {
              educationLevel: EducationLevel.Doctorate,
              employmentStatus: EmploymentStatus.Employed,
              jobTitle: "دکتر پوست",
              fieldOfStudy: "پوست",
            },
          },
          financialStatus: {
            create: {
              personalIncome: 60_000_000,
              carStatus: CarStatus.HasCar,
              housingStatus: HousingStatus.OwnHouse,
            },
          },
        },
      },
    },
  });

  await prisma.user.upsert({
    where: {
      phone: "+989922819369",
    },
    update: {
      phone: "+989922819369",
    },
    create: {
      phone: "+989922819369",
      profile: {
        create: {
          personal: {
            create: {
              firstName: "مهسا",
              lastName: "مرادی",
              displayName: "مهسا",
              image: "/images/users/02.jpg",
              bio: "عاشق خانواده و زندگی آرام هستم و به دنبال فردی مهربان و مسئولیت‌پذیر می‌گردم.",
              gender: Gender.Female,
              birthdate: new Date(),
              maritalStatus: MaritalStatus.Single,
              healthStatus: HealthStatus.Healthy,
              childrenStatus: ChildrenStatus.None,
              personalityType: PersonalityType.Introvert,
            },
          },
          physicalAttributes: {
            create: {
              height: 158,
              skinColor: SkinColor.Olive,
              weight: 60,
              beautyLevel: BeautyLevel.High,
              styleLevel: StyleLevel.High,
            },
          },
          educationAndCareer: {
            create: {
              educationLevel: EducationLevel.Masters,
              employmentStatus: EmploymentStatus.Employed,
              jobTitle: "مهندس نرم‌افزار",
              fieldOfStudy: "کامپیوتر",
            },
          },
          financialStatus: {
            create: {
              personalIncome: 50_000_000,
              carStatus: CarStatus.NoCar,
              housingStatus: HousingStatus.WithFamily,
            },
          },
        },
      },
    },
  });

  await prisma.user.upsert({
    where: {
      phone: "+989922819370",
    },
    update: {
      phone: "+989922819370",
    },
    create: {
      phone: "+989922819370",
      profile: {
        create: {
          personal: {
            create: {
              firstName: "سارا",
              lastName: "احمدی",
              displayName: "سارا",
              image: "/images/users/07.jpg",
              bio: "به دنبال آرامش، زندگی مشترک عاشقانه و احترام متقابل هستم.",
              gender: Gender.Female,
              birthdate: new Date(),
              maritalStatus: MaritalStatus.Divorced,
              healthStatus: HealthStatus.Healthy,
              childrenStatus: ChildrenStatus.None,
              personalityType: PersonalityType.Introvert,
            },
          },
          physicalAttributes: {
            create: {
              height: 165,
              skinColor: SkinColor.Black,
              weight: 65,
              beautyLevel: BeautyLevel.Medium,
              styleLevel: StyleLevel.High,
            },
          },
          educationAndCareer: {
            create: {
              educationLevel: EducationLevel.Bachelors,
              employmentStatus: EmploymentStatus.Unemployed,
              jobTitle: "خانه‌دار",
              fieldOfStudy: "علوم اجتماعی",
            },
          },
          financialStatus: {
            create: {
              personalIncome: 25_000_000,
              carStatus: CarStatus.NoCar,
              housingStatus: HousingStatus.NoHouse,
            },
          },
        },
      },
    },
  });

  await prisma.user.upsert({
    where: {
      phone: "+989922819371",
    },
    update: {
      phone: "+989922819371",
    },
    create: {
      phone: "+989922819371",
      profile: {
        create: {
          personal: {
            create: {
              firstName: "مریم",
              lastName: "حسینی",
              displayName: "مریم",
              image: "/images/users/06.jpg",
              bio: "دوست دارم در کنار فردی متعهد و صادق زندگی کنم و خانواده‌ای شاد بسازم.",
              gender: Gender.Female,
              birthdate: new Date(),
              maritalStatus: MaritalStatus.Divorced,
              healthStatus: HealthStatus.Healthy,
              childrenStatus: ChildrenStatus.Two,
              greatestChildAge: 6,
              personalityType: PersonalityType.Extrovert,
            },
          },
          physicalAttributes: {
            create: {
              height: 160,
              skinColor: SkinColor.White,
              weight: 58,
              beautyLevel: BeautyLevel.High,
              styleLevel: StyleLevel.VeryHigh,
            },
          },
          educationAndCareer: {
            create: {
              educationLevel: EducationLevel.Bachelors,
              employmentStatus: EmploymentStatus.Employed,
              jobTitle: "معلم خصوصی",
              fieldOfStudy: "ریاضی",
            },
          },
          financialStatus: {
            create: {
              personalIncome: 30_000_000,
              carStatus: CarStatus.HasCar,
              housingStatus: HousingStatus.RentedHouse,
            },
          },
        },
      },
    },
  });

  // Seed 2 Male Users
  await prisma.user.upsert({
    where: {
      phone: "+989922819372",
    },
    update: {
      phone: "+989922819372",
    },
    create: {
      phone: "+989922819372",
      profile: {
        create: {
          personal: {
            create: {
              firstName: "علی",
              lastName: "محمدی",
              displayName: "علی",
              image: "/images/users/03.jpg",
              bio: "به دنبال فردی صادق و خانواده‌دوست برای زندگی مشترک هستم.",
              gender: Gender.Male,
              birthdate: new Date(),
              maritalStatus: MaritalStatus.Single,
              healthStatus: HealthStatus.ChronicCondition,
              healthDescription: "قند خون دارم یکم",
              childrenStatus: ChildrenStatus.Four,
              greatestChildAge: 36,
              personalityType: PersonalityType.Ambivert,
            },
          },
          physicalAttributes: {
            create: {
              height: 175,
              skinColor: SkinColor.Wheatish,
              weight: 72,
              beautyLevel: BeautyLevel.High,
              styleLevel: StyleLevel.Medium,
            },
          },
          educationAndCareer: {
            create: {
              educationLevel: EducationLevel.Masters,
              employmentStatus: EmploymentStatus.Employed,
              jobTitle: "مهندس عمران",
              fieldOfStudy: "عمران",
            },
          },
          financialStatus: {
            create: {
              personalIncome: 70_000_000,
              carStatus: CarStatus.HasCar,
              housingStatus: HousingStatus.OwnHouse,
            },
          },
        },
      },
    },
  });

  await prisma.user.upsert({
    where: {
      phone: "+989922819373",
    },
    update: {
      phone: "+989922819373",
    },
    create: {
      phone: "+989922819373",
      profile: {
        create: {
          personal: {
            create: {
              firstName: "محمد",
              lastName: "رضایی",
              displayName: "محمد",
              image: "/images/users/04.jpg",
              bio: "به دنبال شریکی برای ساختن زندگی توام با احترام و عشق هستم.",
              gender: Gender.Male,
              birthdate: new Date(),
              maritalStatus: MaritalStatus.Widowed,
              healthStatus: HealthStatus.Healthy,
              childrenStatus: ChildrenStatus.One,
              greatestChildAge: 8,
              personalityType: PersonalityType.Extrovert,
            },
          },
          physicalAttributes: {
            create: {
              height: 180,
              skinColor: SkinColor.White,
              weight: 80,
              beautyLevel: BeautyLevel.Medium,
              styleLevel: StyleLevel.Medium,
            },
          },
          educationAndCareer: {
            create: {
              educationLevel: EducationLevel.Bachelors,
              employmentStatus: EmploymentStatus.Employed,
              jobTitle: "بازرگان",
              fieldOfStudy: "مدیریت بازرگانی",
            },
          },
          financialStatus: {
            create: {
              personalIncome: 100_000_000,
              carStatus: CarStatus.HasCar,
              housingStatus: HousingStatus.OwnHouse,
            },
          },
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
