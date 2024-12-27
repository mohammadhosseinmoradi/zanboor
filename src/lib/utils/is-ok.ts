import { Ok, Result } from "@/types/result";

export function isOk<T, E = undefined>(
  result: Result<T, E>
): result is Ok<T, E> {
  return "data" in result;
}
