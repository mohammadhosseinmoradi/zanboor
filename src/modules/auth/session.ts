import "server-only";
import { SessionPayload } from "@/modules/auth/types";
import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.AUTH_SECRET;
const encodedSecretKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("4w")
    .sign(encodedSecretKey);
}

export async function decrypt(session: string) {
  try {
    const { payload } = await jwtVerify(session, encodedSecretKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    console.error("Failed to verify session.");
  }
}

export async function auth() {}
