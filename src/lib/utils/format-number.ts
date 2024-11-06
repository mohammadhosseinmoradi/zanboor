/** Format a number by inserting commas as thousands separators */
export function formatNumber(x: number | string | undefined) {
  if (!x) return x;
  const parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
