"use server"

import { Session, SessionPayload } from "@/modules/auth/types";
import { SignJWT, jwtVerify, JWTPayload } from "jose";
import { cookies } from "next/headers";
import prisma from "@/lib/db";

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
    return payload as SessionPayload & JWTPayload | undefined;
  } catch {
    console.error("Failed to verify session.");
  }
}

export async function createSession(payload: SessionPayload) {
  const user = await prisma.user.findUnique({
    where: {
      id: payload.userId,
    },
  });
  if (!user) throw new Error("User is missing.");
  const session = await encrypt(payload);
  const cookieStore = await cookies();
  cookieStore.set("session", session);
  return session;
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  if (!session) return null;
  return session;
}

export async function auth(): Promise<Session | null> {
  const session = await getSession();
  if (!session) return null;
  const sessionPayload = await decrypt(session);
  if (!sessionPayload || !sessionPayload?.exp) return null;
  if (sessionPayload.exp * 1000 < Date.now()) return null;
  const user = await prisma.user.findUnique({
    where: {
      id: sessionPayload.userId,
    },
  });
  if (!user) return null;
  return {
    user,
  };
}
