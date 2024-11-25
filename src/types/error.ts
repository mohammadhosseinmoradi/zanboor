export enum ErrorName {
  InvalidOtp = "invalidOtp",
  Unauthorized = "unauthorized",
  Unknown = "unknown",
  BadRequest = "badRequest",
}

export const ErrorStatusMap = {
  [ErrorName.InvalidOtp]: 400,
  [ErrorName.Unauthorized]: 401,
  [ErrorName.Unknown]: 500,
};
