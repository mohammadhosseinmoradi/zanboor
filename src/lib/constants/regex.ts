export const MOBILE_REGEX =
  /^(\+989|00989|989|09|\+۹۸۹|۰۰۹۸۹|۹۸۹|۰۹)[0-9,۰,١,۲,۳,۴,۵,۶,۷,۸,۹]{9,9}$/;

export const NATIONAL_CODE_REGEX = /^[0-9]{10}$/;

export const POSTAL_CODE_REGEX = /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/;

export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const ENGLISH_AND_PERSIAN_REGEX = /^([a-zA-Z ]|[\u0600-\u06FF\s])*$/;
