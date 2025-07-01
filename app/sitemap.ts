import { BASE_URL } from "@/constant";
import { MetadataRoute } from "next";
import { getBlogPosts } from "./blog/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  let blogs = getBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    images: [`${BASE_URL}/blog/images/${post.metadata.image}`],
  }));

  let routes = ["", "/blog"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
