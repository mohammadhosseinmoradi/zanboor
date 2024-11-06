import { MouseEventHandler, ReactNode } from "react";
import { useTabContext } from "@/components/scrollspy-tab/group";
import { cn } from "@/lib/utils";

type TabProps = {
  className?: string;
  children: ReactNode;
  index?: number;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  disable?: boolean;
};

export default function Tab({ className, index, onClick, disable, ...otherProps }: TabProps) {
  const { state } = useTabContext();
  const id = state.id + index;

  return (
    <button
      {...otherProps}
      onClick={(event) => {
        onClick && onClick(event);

        if (disable) return;
        const element = document.getElementById(id);
        if (!element) return;
        const y = element.getBoundingClientRect().top + window.scrollY + state.offsetTop;
        window.scrollTo({ top: y, behavior: "smooth" });
      }}
      className={cn("h-full w-full shrink-0 px-4 py-2 text-sm/7", className)}
    />
  );
}
