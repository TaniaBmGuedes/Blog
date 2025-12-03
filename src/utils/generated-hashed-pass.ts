import { hashPassword } from "@/lib/login/manage-login";

(async () => {
  const myPass = "";
  const hashPassBase64 = await hashPassword(myPass);

  console.log({ hashPassBase64 });
})();
