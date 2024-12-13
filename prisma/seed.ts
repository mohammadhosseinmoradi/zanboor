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
              image: "",
              bio: "دنبال همسری هستم خوب، خوشکل، باوفا، مهربون، خانواده‌دوست و اهل زندگی مشترک که در کنار هم با عشق و احترام یه زندگی فوق‌العاده‌ای بسازیم.",
              gender: Gender.Female,
              birthdate: new Date(),
              maritalStatus: MaritalStatus.Divorced,
              healthStatus: HealthStatus.Healthy,
              childrenStatus: ChildrenStatus.One,
              greatestChildAge: 4,
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
