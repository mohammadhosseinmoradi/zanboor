import { z } from "zod";
import { userDtoSchema } from "@/modules/user/schema";

export type UserDto = z.infer<typeof userDtoSchema>;
