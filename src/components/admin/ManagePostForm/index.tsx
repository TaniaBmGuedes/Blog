"use client";

import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";
import ImageUploader from "../ImageUploader";
import { InputCheckbox } from "@/components/InputChecbox";

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState("");

  return (
    <form className="max-w-4xl mx-auto mt-10 bg-white shadow-sm border border-gray-200 rounded-xl p-8 space-y-10">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
          Create New Post
        </h2>
        <p className="text-gray-500">
          Fill out the information below to publish a new post.
        </p>
      </div>

      <section className="space-y-6">
        <h3 className="text-xl font-medium text-gray-800">Post Metadata</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelText="ID"
            name="id"
            placeholder="Random ID"
            type="text"
            readOnly
          />

          <InputText
            labelText="Slug"
            name="slug"
            placeholder="Random Slug"
            type="text"
            readOnly
          />

          <InputText
            labelText="Author"
            name="author"
            placeholder="Type the author name"
            type="text"
          />

          <InputText
            labelText="Title"
            name="title"
            placeholder="Type the title"
            type="text"
          />

          <InputText
            labelText="Excerpt"
            name="excerpt"
            placeholder="Short summary"
            type="text"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-medium text-gray-800">Content</h3>

        <MarkdownEditor
          labelText="Write your content"
          value={contentValue}
          setValue={setContentValue}
          textAreaName="content"
        />
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-medium text-gray-800">Cover Image</h3>

        <ImageUploader />

        <InputText
          labelText="Image URL"
          name="coverImageUrl"
          placeholder="Paste the image URL"
          type="text"
        />
      </section>

      <section className="space-y-4 border-t pt-6">
        <InputCheckbox
          labelText="Publish post now?"
          name="published"
          type="checkbox"
        />

        <Button type="submit" className="mt-2 px-6 py-3 text-lg">
          Publish Post
        </Button>
      </section>
    </form>
  );
}
