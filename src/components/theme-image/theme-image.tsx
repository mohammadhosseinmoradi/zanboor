import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type ThemeImageProps = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string;
  srcDark: string;
};

export function ThemeImage(props: ThemeImageProps) {
  const { srcLight, srcDark, alt, className, ...otherProps } = props;

  return (
    <>
      <Image
        className={cn("dark:hidden", className)}
        src={srcLight}
        alt={alt}
        {...otherProps}
      />
      <Image
        className={cn(
          "[&:not(:where([data-theme=dark],[data-theme=dark]_*))]:hidden",
          className
        )}
        src={srcDark}
        alt={alt}
        {...otherProps}
      />
    </>
  );
}
