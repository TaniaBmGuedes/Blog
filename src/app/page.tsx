import { ClientComponent } from "@/components/ClientComponent";
import PostFeatured from "@/components/PostFeatured";
import { PostList } from "@/components/PostList";
import { ServerComponent } from "@/components/ServerComponent";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
        <PostFeatured />
        <PostList />
      </Suspense>
    </>
  );
}
