import useUpdateEffect from "@/hooks/use-update-effect";

export default function useDebounceCallback<T>(
  value: T,
  callback: (value: T) => void,
  delay: number = 1000
) {
  useUpdateEffect(() => {
    const handler = setTimeout(() => callback(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);
}
