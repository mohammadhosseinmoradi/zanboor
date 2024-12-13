import prisma from "@/lib/db";
import { Result } from "@/types/result";
import { auth } from "@/modules/auth/session";
import { ErrorMessageMap, ErrorName } from "@/types/error";
import { ProfileDto } from "@/modules/profile/types";
import { profileDtoSchema } from "@/modules/profile/schema";

export async function getProfile(): Promise<Result<ProfileDto>> {
  const session = await auth();

  if (!session)
    return {
      error: {
        name: ErrorName.Unauthorized,
        message: ErrorMessageMap[ErrorName.Unauthorized],
      },
    };

  const profile = await prisma.profile.findUnique({
    where: {
      userId: session.user.id,
    },
    include: {
      personal: {
        include: {
          location: true,
        },
      },
      educationAndCareer: true,
      physicalAttributes: true,
      financialStatus: true,
    },
  });

  const profileDto = profileDtoSchema.parse(profile);

  return {
    data: profileDto,
  };
}
