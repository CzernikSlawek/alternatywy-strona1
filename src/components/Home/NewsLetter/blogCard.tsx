import Image from "next/image";
import { Blog } from "@/types/blog";

import Link from "next/link";

const BlogCard = ({ blog }: { blog: Blog }) => {
    const { title, coverImage, slug, role } = blog;
    return (
    <Link
      href={`/blog/${slug}`}
      className="group flex items-start gap-6 no-underline hover:no-underline"
    >
      {/* Obrazek */}
      <div className="relative w-[150px] h-[150px] shrink-0 overflow-hidden rounded-lg">
        <Image
          src={coverImage!}
          alt={title || "Zdjęcie artykułu"}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="150px"
        />
      </div>

      {/* Treść */}
<div>
  <h4 className="font-medium text-lg mb-2 transition-colors duration-300 group-hover:text-primary">
    {title}
  </h4>

  {role && (
    <p className="text-muted dark:text-white/60 text-base">
      {role}
    </p>
  )}
</div>
    </Link>
  );
};

export default BlogCard;