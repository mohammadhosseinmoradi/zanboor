export function toEnglishDigits(input: string): string {
  if (!input) return "";

  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let output = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const index = persianNumbers.indexOf(char);
    if (index !== -1) {
      output += englishNumbers[index];
    } else {
      output += char;
    }
  }

  return output;
}
