import { Ref, RefCallback, RefObject } from "react";

export function syncRefs<T = never>(
  ...refs: (RefObject<T> | Ref<T> | undefined | null)[]
): RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as RefObject<T | null>).current = value;
      }
    });
  };
}
