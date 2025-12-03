import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const jwtSecretKey = process.env.JWT_SECRET_KEY;
const jwtEncodedKey = new TextEncoder().encode(jwtSecretKey);

const loginExpSeconds = Number(process.env.LOGIN_EXPIRATION_SECONDS) || 86400;
const loginExpStr = process.env.LOGIN_EXPIRATION_STRING || "1d";
const loginCookieName = process.env.LOGIN_COOKIE_NAME || "loginSession";

export async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, 10);
  const base64 = Buffer.from(hash).toString("base64");
  return base64;
}

export async function verifyPassword(password: string, storedHash: string) {
  const hash = decodeHash(storedHash);

  if (!hash) return false;

  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    console.log("error in verify password", error);
    return false;
  }
}

function decodeHash(value: string) {
  if (!value) return "";

  if (value.startsWith("$2")) return value;

  const decoded = Buffer.from(value, "base64").toString("utf-8");

  if (decoded.startsWith("$2")) return decoded;

  return "";
}

export async function createLoginSession(username: string) {
  const expiresAt = new Date(Date.now() + loginExpSeconds * 1000);
  const loginSession = username + "ANYTHING";
  const cookieStore = await cookies();

  cookieStore.set(loginCookieName, loginSession, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expires: expiresAt,
  });
}

export async function deleteLoginSession() {
  const cookieStore = await cookies();
  cookieStore.set(loginCookieName, "", { expires: new Date(0) });
  cookieStore.delete(loginCookieName);
}
