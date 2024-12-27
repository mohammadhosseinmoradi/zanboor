import { ErrorName } from "@/types/error";

export type Ok<T, E = undefined> = E extends undefined
  ? { data: T }
  : { data: T; meta: E };

export type Err = {
  error: {
    name: ErrorName;
    message: string;
  };
};

export type Result<T, E = undefined> = Ok<T, E> | Err;
