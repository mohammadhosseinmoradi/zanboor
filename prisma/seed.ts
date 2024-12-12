import {
  PrismaClient,
  MaritalStatus,
  Gender,
  SkinColor,
  EducationLevel,
  EmploymentStatus,
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
            },
          },
          physicalAttributes: {
            create: {
              height: 167,
              skinColor: SkinColor.Wheatish,
              weight: 54,
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
        },
      },
    },
    include: {
      profile: {
        include: {
          personal: true,
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
