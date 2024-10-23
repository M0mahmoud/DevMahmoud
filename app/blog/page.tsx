import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDate, getBlogPosts } from "./utils";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Blog() {
  const blogPosts = getBlogPosts();
  return (
    <main>
      <h2 className="mb-5 text-4xl font-bold leading-10">My Blog</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts
          // desc Sort
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, index) => (
            <div
              key={index + post.slug}
              className="overflow-hidden bg-black rounded-lg"
            >
              <div className="relative h-48">
                <Image
                  src={`/blog/images/${post.metadata.image}`}
                  alt={post.metadata.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="mb-2 text-xl font-semibold line-clamp-2 hsp">
                    {post.metadata.title}
                  </h3>
                </Link>
                <p className="mb-4 text-sm text-gray-400 line-clamp-3">
                  {post.metadata.summary}
                </p>
                <div className="flex items-center text-sm text-gray-500 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="me-2 size-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  {formatDate(post.metadata.publishedAt, false)}
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
