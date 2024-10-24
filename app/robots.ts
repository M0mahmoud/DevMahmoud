import { BASE_URL } from "@/constant";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
