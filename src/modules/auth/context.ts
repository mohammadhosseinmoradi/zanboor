import { EnterUserId } from "@/modules/auth/types";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type AuthContextProps = Partial<EnterUserId> & {
  otpExpiresAt?: Date;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    const err = new Error("useAuthContext must be used within AuthContext.Provider");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useAuthContext);
    throw err;
  }
  return context;
}

export type AuthSetContextProps = Dispatch<SetStateAction<AuthContextProps>>;

export const AuthSetContext = createContext<AuthSetContextProps | null>(null);

export function useAuthSetContext() {
  const context = useContext(AuthSetContext);
  if (!context) {
    const err = new Error("useAuthSetContext must be used within AuthSetContext.Provider");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useAuthSetContext);
    throw err;
  }
  return context;
}
