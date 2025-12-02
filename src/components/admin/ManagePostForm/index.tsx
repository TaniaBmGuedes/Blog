"use client";

import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputChecbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";
import ImageUploader from "../ImageUploader";

export const dynamic = "force-dynamic";

export default function ManagePostForm() {
  const [contentValue, setContentValue] = useState("");
  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          labelText="Nome"
          placeholder="Digite seu nome"
          type="password"
        />
        <InputText labelText="Sobrenome" placeholder="Digite seu sobrenome" />

        <InputCheckbox labelText="Sobrenome" />
        <ImageUploader />

        <MarkdownEditor
          labelText="Conteúdo"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
        />

        <div className="mt-4">
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
}
