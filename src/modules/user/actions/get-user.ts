"use server";

import prisma from "@/lib/db";
import { Result } from "@/types/result";
import { UserDto } from "@/modules/user/types";
import { userDtoSchema } from "@/modules/user/schema";

export async function getUser(id: string): Promise<Result<UserDto>> {
  const user = await prisma.user.findUnique({
    where: {
      id,
      profile: {
        isNot: null,
      },
    },
    include: {
      profile: {
        include: {
          personal: true,
          educationAndCareer: true,
          physicalAttributes: true,
          familyInfo: true,
          financialStatus: true,
          marriagePreferences: true,
        },
      },
    },
  });

  const userDto = userDtoSchema.parse(user);

  return {
    data: userDto,
  };
}
