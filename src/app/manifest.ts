import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "",
    short_name: "",
    description: "",
    icons: [],
    theme_color: "#FFFFFF",
    background_color: "#FFFFFF",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
  };
}
