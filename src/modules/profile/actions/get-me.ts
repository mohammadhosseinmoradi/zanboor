import prisma from "@/lib/db";
import { Result } from "@/types/result";
import { auth } from "@/modules/auth/session";
import { ErrorMessageMap, ErrorName } from "@/types/error";
import { UserDto } from "@/modules/profile/types";
import { userDtoSchema } from "@/modules/profile/schema";

export async function getMe(): Promise<Result<UserDto>> {
  const session = await auth();

  if (!session)
    return {
      error: {
        name: ErrorName.Unauthorized,
        message: ErrorMessageMap[ErrorName.Unauthorized],
      },
    };

  const profile = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      profile: {
        include: {
          personal: {
            include: {
              location: true,
            },
          },
          educationAndCareer: true,
          physicalAttributes: true,
          familyInfo: true,
          financialStatus: true,
          marriagePreferences: true,
        },
      },
    },
  });

  const profileDto = userDtoSchema.parse(profile);

  return {
    data: profileDto,
  };
}
