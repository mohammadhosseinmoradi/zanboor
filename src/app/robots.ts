import { MetadataRoute } from "next";
import { routes } from "@/lib/constants/routes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: [
        routes.profile.index,
        routes.messages.index,
        routes.favorites,
        routes.counselor
      ]
    }
  };
}
