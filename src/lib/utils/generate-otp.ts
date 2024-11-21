export function generateOtp(): string {
  const characters = "123456789";
  let otp = "";

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    otp += characters[randomIndex];
  }

  return otp;
}
