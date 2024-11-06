export default function formatPhoneNumber(phone: string): string {
  const cleaned = ("" + phone).replace(/\D/g, "");

  // Match without country code.
  let match = cleaned.match(/^(\d{4})(\d{3})(\d{4})$/);
  if (match) {
    return match[1] + " " + match[2] + " " + match[3];
  }

  // Match with country code (+98).
  match = cleaned.match(/^(?:98)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return (match[1] ? "(+98) " : "") + match[1] + " " + match[2] + " " + match[3];
  }

  return phone;
}
