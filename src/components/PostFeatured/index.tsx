import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

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
        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="26-11-2025 13:09"
          >
            26-11-2025
          </time>
          <PostHeading as="h1" url={postLink}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
            dolorem est dolor porro, doloribus neque, quidem mollitia
            doloremque, ad perspiciatis fugiat. Rerum, vel ex? Impedit ullam
            harum blanditiis mollitia?
          </p>
        </div>
      </section>
    </>
  );
}
