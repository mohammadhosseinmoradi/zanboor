import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export function HtmlContent({ className, children }: { className?: string; children?: string }) {
  return (
    <div
      className={cn(
        "prose max-w-none",
        "prose-li:list-inside",
        "prose-a:text-primary",
        "prose-img:rounded-md",
        "prose-p:text-justify",
        "prose-p:text-fg",
        "prose-headings:text-fg-hover",
        "prose-strong:text-fg-hover",
        "prose-blockquote:text-fg-muted",
        "prose-blockquote:border-fg-muted",
        "prose-li:text-fg-muted",
        "prose-img:mx-auto",
        className
      )}
    >
      {parse(children || "")}
    </div>
  );
}
