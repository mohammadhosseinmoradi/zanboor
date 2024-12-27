type GetNormalizePhoneParams = {
  countryCode: string;
  phone: string;
};

export function getNormalizePhone(params: GetNormalizePhoneParams): string {
  const { countryCode, phone } = params;

  if (phone.length < 10)
    throw new Error("Phone number must be at least 10 digits");

  return countryCode + phone.slice(-10);
}
