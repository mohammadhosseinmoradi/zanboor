import { useCallback } from "react";
import { useLatest } from "./use-latest";

export const useEvent =
  // TODO: Add React.useEvent ?? once the useEvent hook is available
  function useEvent<
    F extends (...args: any[]) => any, // eslint-disable-line @typescript-eslint/no-explicit-any
    P extends any[] = Parameters<F>, // eslint-disable-line @typescript-eslint/no-explicit-any
    R = ReturnType<F>,
  >(cb: (...args: P) => R) {
    const cache = useLatest(cb);
    return useCallback((...args: P) => cache.current(...args), [cache]);
  };
