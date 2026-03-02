import { getAllPosts, getPostBySlug } from "@/utils/markdown";
import markdownToHtml from "@/utils/markdownToHtml";

import Image from "next/image";

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    const post = getPostBySlug(params.slug, [
        "title",
        "author",
        "content",
        "metadata",
    ]);

    const siteName = process.env.SITE_NAME || "Your Site Name";
    const authorName = process.env.AUTHOR_NAME || "Your Author Name";

    if (post) {
        const metadata = {
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

        return metadata;
    } else {
        return {
            title: "Not Found",
            description: "No blog article has been found",
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
}

export default async function BlogHead({ params }: Props) {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    const post = getPostBySlug(params.slug, [
        "title",
        "author",
        "authorImage",
        "content",
        "coverImage",
        "date",
    ]);

    const content = await markdownToHtml(post.content || "");

    return (
  <>
    <section className="relative pt-44 dark:bg-dark px-4">
      <div className="container lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) mx-auto">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center">

          {/* LEWA STRONA */}
          <div className="col-span-8">
            {/* ROLA */}
            {post.role && (
              <span className="inline-block px-4 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-6">
                {post.role}
              </span>
            )}

            {/* IMIĘ I NAZWISKO */}
            <h2 className="text-midnight_text dark:text-white text-[40px] leading-tight font-bold">
              {post.title}
            </h2>
          </div>

          {/* PRAWA STRONA */}
          <div className="flex items-center md:justify-center justify-start gap-6 col-span-4 pt-6 md:pt-0">
            {post.authorImage && (
              <Image
                src={post.authorImage}
                alt={post.title || "Autor"}
                width={80}
                height={80}
                className="rounded-full object-cover"
                quality={100}
              />
            )}

            <div>
              <span className="text-[22px] leading-tight font-bold text-midnight_text dark:text-white">
                {post.title}
              </span>
              {post.role && (
                <p className="text-lg text-gray dark:text-white/70">
                  {post.role}
                </p>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
        </>
    );
}