"use server";

import prisma from "@/lib/db";
import { Result } from "@/types/result";
import { UserDto } from "@/modules/user/types";
import { userDtoSchema } from "@/modules/user/schema";

export async function getUsers(): Promise<Result<UserDto[]>> {
  const users = await prisma.user.findMany({
    where: {
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

  const usersDto = users.map<UserDto>((user) => userDtoSchema.parse(user));

  return {
    data: usersDto,
  };
}
