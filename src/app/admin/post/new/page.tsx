import ManagePostForm from "@/components/admin/ManagePostForm";
import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputChecbox";
import { InputText } from "@/components/InputText";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <>
      <h1>Create Form </h1>
      <ManagePostForm />
    </>
  );
}
