import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export function HtmlContent({
  className,
  children
}: {
  className?: string;
  children?: string;
}) {
  return (
    <div
      className={cn(
        "prose max-w-none",
        "prose-li:list-inside",
        "prose-a:text-primary",
        "prose-img:rounded-md",
        "prose-p:text-justify",
        "prose-p:text-on-surface",
        "prose-headings:text-on-surface-hover",
        "prose-strong:text-on-surface-hover",
        "prose-blockquote:text-on-surface-variant",
        "prose-blockquote:border-fg-muted",
        "prose-li:text-on-surface-variant",
        "prose-img:mx-auto",
        className
      )}
    >
      {parse(children || "")}
    </div>
  );
}
