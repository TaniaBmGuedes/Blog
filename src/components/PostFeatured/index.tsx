import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export default function PostFeatured() {
  const slug = "qualquer";
  const postLink = `/post/${slug}`;
  return (
    <>
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href: postLink,
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: "/images/bryen_0.png",
            alt: "Alt da imagem",
            priority: true,
          }}
        />

        <PostSummary
          postLink={postLink}
          postHeading="h2"
          createdAt={"11-11-1111"}
          excerpt={"oi"}
          title={"oi"}
        />
      </section>
    </>
  );
}
