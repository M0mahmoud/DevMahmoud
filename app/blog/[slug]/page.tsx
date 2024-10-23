import { BASE_URL } from "@/constant";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { CustomMDX } from "../mdx";
import { formatDate, getPost } from "../utils";

type Props = { params: { slug: string } };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);

  if (!post) return { title: "NOT FOUND" };

  let { publishedAt, title, summary: description, image } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: publishedAt,
      url: `${BASE_URL}/blog/${post.slug}`,
      images: [`${BASE_URL}/blog/images/${image}`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/blog/images/${post.slug}`],
    },
  };
}

export default function page({ params }: Props) {
  const post = getPost(params.slug);

  if (!post) {
    return notFound();
  }
  return (
    <section className="mt-3">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: `/blog/images/${post.metadata.image}`,
            // url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <div className="flex flex-col max-w-4xl gap-4 mx-auto mb-6">
        <Link
          href="/blog"
          className="px-4 py-2 text-sm font-medium border-none rounded-lg sp w-fit"
        >
          Back to blog
        </Link>
        <Image
          src={`/blog/images/${post.metadata.image}`}
          alt={post.metadata.title}
          width={1312}
          height={736}
          className="object-cover rounded-lg"
          loading="lazy"
        />
        <h1 className="text-3xl font-bold leading-10">{post.metadata.title}</h1>
        <p className="max-w-lg font-medium text-gray-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </div>
    </section>
  );
}
