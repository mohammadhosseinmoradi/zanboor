export const PHONE_REGEX =
  /^(\+989|09)[0-9]{9}$/;

export const NATIONAL_CODE_REGEX = /^[0-9]{10}$/;

export const POSTAL_CODE_REGEX = /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/;

export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const ENGLISH_AND_PERSIAN_REGEX = /^([a-zA-Z ]|[\u0600-\u06FF\s])*$/;
