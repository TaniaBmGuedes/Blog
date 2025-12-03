import { LoginForm } from "@/components/admin/LoginForm";
import ErrorMesssage from "@/components/ErrorMessage";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Login",
};
export default async function AdminLoginPage() {
  const allowLoginEnv = (process.env.ALLOW_LOGIN ?? "").trim();
  const allowLogin = allowLoginEnv === "" ? true : Boolean(Number(allowLoginEnv));

  if (!allowLogin) {
    return (
      <ErrorMesssage
        contentTitle="403"
        content="Free login system using ALLOW_LOGIN"
      />
    );
  }
  return <LoginForm />;
}
