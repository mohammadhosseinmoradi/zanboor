import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "زنبور",
    short_name: "زنبور",
    description: "ازدواج دائم و موقت ،قرار ملاقات، چت، آشنایی با افراد جدید",
    theme_color: "#FFFFFF",
    background_color: "#FFFFFF",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    icons: [
      {
        src: "/icons/192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
