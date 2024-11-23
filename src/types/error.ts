export enum ErrorName {
  InvalidOtp = "invalidOtp",
  Unauthorized = "unauthorized",
  Unknown = "unknown",
}

export const ErrorStatusMap = {
  [ErrorName.InvalidOtp]: 400,
  [ErrorName.Unauthorized]: 401,
  [ErrorName.Unknown]: 500,
};
