import Link from "next/link";
import { getAllPosts } from "@/utils/markdown";
import BlogCard from "./blogCard";

const Newsletter = () => {
  const posts = getAllPosts(["title", "role", "coverImage", "slug"]);

  return (
    <section className="lg:py-28 py-16 dark:bg-dark">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-44">

          {/* LEWA STRONA – REGULAMIN + PDF */}
          <div data-aos="fade-left" className="flex items-center justify-center">
            <div className="bg-white dark:bg-midnight_text/30 border border-border dark:border-dark_border rounded-md p-10 shadow-sm text-center w-full max-w-[520px]">
              <h2 className="text-2xl font-semibold mb-6 text-midnight_text dark:text-white">
                Regulamin
              </h2>

              <p className="text-base text-muted dark:text-white/70 mb-6">
                Zapoznaj się ze szczegółowymi zasadami funkcjonowania Domu Dziennego Pobytu.
              </p>

              <Link
                href="/regulamin"
                className="inline-block text-white bg-linear-to-r from-primary to-secondary px-7 py-4 rounded-md font-semibold hover:text-primary hover:border-primary hover:from-transparent hover:to-transparent border border-transparent"
              >
                Zobacz regulamin
              </Link>

              {/* PDF-y do pobrania */}
              <div className="mt-10 text-left">
                <h3 className="text-lg font-semibold text-midnight_text dark:text-white mb-4">
                  Dokumenty do pobrania
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="/pliki/karta-zgloszeniowa/karta-zgloszeniowa.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="group p-4 rounded-lg border border-border dark:border-dark_border bg-white/70 dark:bg-dark/40 hover:shadow-md transition no-underline"
                  >
                    <p className="font-semibold text-midnight_text dark:text-white group-hover:text-primary">
                      Karta zgłoszeniowa
                    </p>
                    <p className="text-sm text-muted dark:text-white/60 mt-1">
                      Pobierz PDF
                    </p>
                  </a>

                  <a
                    href="/pliki/karta-informacyjna/karta-informacyjna.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="group p-4 rounded-lg border border-border dark:border-dark_border bg-white/70 dark:bg-dark/40 hover:shadow-md transition no-underline"
                  >
                    <p className="font-semibold text-midnight_text dark:text-white group-hover:text-primary">
                      Karta informacyjna
                    </p>
                    <p className="text-sm text-muted dark:text-white/60 mt-1">
                      Pobierz PDF
                    </p>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* PRAWA STRONA – AKTUALNOŚCI */}
          <div className="lg:mt-0 mt-8">
            <div className="flex justify-between items-start gap-6 border-b border-border dark:border-dark_border pb-6 mb-8">
              <h4 className="text-base mb-0">
                Dowiedz się, kto każdego dnia z troską, empatią i zaangażowaniem
                wspiera naszych Seniorów. To właśnie oni budują atmosferę
                zaufania, bezpieczeństwa i życzliwości.
              </h4>

              <Link
                href="/blog"
                className="text-error hover:text-warning text-base whitespace-nowrap ml-4"
              >
                Sprawdź
              </Link>
            </div>

            {posts.slice(0, 3).map((blog, i) => (
              <div
                key={i}
                className="lg:mb-10 mb-6"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;