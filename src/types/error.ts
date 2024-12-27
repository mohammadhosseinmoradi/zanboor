export enum ErrorName {
  InvalidOtp = "invalidOtp",
  Unauthorized = "unauthorized",
  Unknown = "unknown",
  BadRequest = "badRequest"
}

export const ErrorStatusMap: Record<ErrorName, number> = {
  [ErrorName.InvalidOtp]: 400,
  [ErrorName.Unauthorized]: 401,
  [ErrorName.Unknown]: 500,
  [ErrorName.BadRequest]: 400
};

export const ErrorMessageMap: Record<ErrorName, string> = {
  [ErrorName.InvalidOtp]: "Otp is invalid.",
  [ErrorName.Unauthorized]: "Unauthorized.",
  [ErrorName.Unknown]: "Unknown error.",
  [ErrorName.BadRequest]: "Bad request."
};
