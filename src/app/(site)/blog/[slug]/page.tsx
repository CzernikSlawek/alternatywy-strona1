import LatestBlog from "@/components/Blog/LatestBlog";
import Volunteer from "@/components/SharedComponent/Volunteer";
import { getPostBySlug } from "@/utils/markdown";
import markdownToHtml from "@/utils/markdownToHtml";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: any) {
  const data = await params;

  const siteName = process.env.SITE_NAME || "Your Site Name";
  const authorName = process.env.AUTHOR_NAME || "Your Author Name";

  const post = getPostBySlug(data.slug, ["title", "content", "metadata"]);

  if (post) {
    return {
      title: `${post.title || "Single Post Page"} | ${siteName}`,
      author: authorName,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  return {
    title: "Not Found",
    description: "No article has been found",
    author: authorName,
    robots: {
      index: false,
      follow: false,
      nocache: false,
      googleBot: {
        index: false,
        follow: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function Post({ params }: any) {
  const data = await params;

  const post = getPostBySlug(data.slug, [
    "title",
    "role",
    "authorImage", // jeśli finalnie chcesz usunąć authorImage z MDX, usuń też stąd i z headera
    "content",
    "coverImage",
  ]);

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      {/* HEADER */}
      <section className="relative pt-44 dark:bg-dark px-4">
        <div className="container lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) mx-auto">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            {/* LEWA STRONA */}
            <div className={post?.authorImage ? "col-span-8" : "col-span-12"}>
              {post?.role && (
             <span className="inline-block px-5 py-2 text-base md:text-lg font-semibold tracking-wide bg-primary/10 text-primary rounded-full mb-6">
              {post.role}
            </span>
              )}

              <h2 className="text-midnight_text dark:text-white text-[40px] leading-tight font-bold">
                {post?.title}
              </h2>
            </div>

            {/* PRAWA STRONA: TYLKO ZDJĘCIE (opcjonalnie) */}
            {post?.authorImage && (
              <div className="col-span-4 flex md:justify-center justify-start">
                <Image
                  src={post.authorImage}
                  alt={post.title || "Zdjęcie"}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                  quality={100}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TREŚĆ */}
      <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-32 px-4">
        <div className="container lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              {/* Duże zdjęcie */}
              {post?.coverImage && (
            <div className="z-20 mb-16 flex justify-center">
             <div className="w-full md:w-2/5 lg:w-1/2 overflow-hidden rounded-3xl">
              <Image
               src={post.coverImage}
               alt={post.title || "Zdjęcie"}
               width={1170}
               height={800}
               quality={100}
               className="w-full h-auto object-cover"
              />
             </div>
            </div>
              )}

              {/* Treść na pełną szerokość */}
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 lg:w-full">
                  <div className="blog-details markdown">
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}