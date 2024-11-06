const DEFAULT_LENGTH = 2;

export function getInitials(value: string | null, length?: number) {
  if (!value) return "";
  const words = value.replace(/\s+/g, " ").trim().split(" ");
  const initials = words
    .map((word) => word.charAt(0))
    .slice(0, length || DEFAULT_LENGTH)
    .join("‌");
  return initials.toUpperCase();
}
