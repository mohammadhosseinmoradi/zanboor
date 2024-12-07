import { cva, VariantProps } from "cva";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CheckCircleIcon, CircleXIcon, InfoIcon, TriangleAlertIcon } from "lucide-react";

const alert = cva({
  base: "text-sm flex gap-2 border rounded-lg [&>[data-slot=icon]]:shrink-0",
  variants: {
    variant: {
      filled: "",
      filledTonal: "",
      outlined: "",
      plain: "",
    },
    type: {
      success: "text-success bg-success/5 border-success/25",
      info: "text-info bg-info/5 border-info/25",
      warning: "text-warning bg-warning/5 border-warning/25",
      error: "text-error bg-error/5 border-error/25",
    },
    size: {
      sm: "text-xs p-1 [&>[data-slot=icon]]:size-4",
      md: "text-sm p-2 [&>[data-slot=icon]]:size-5",
    },
    align: {
      start: "justify-start items-start",
      center: "justify-center items-center",
    },
  },
  defaultVariants: {
    type: "info",
    size: "md",
    align: "start",
  },
});

type AlertProps = VariantProps<typeof alert> & {
  children?: ReactNode;
  className?: string;
};

export function Alert(props: AlertProps) {
  const { children, className, type, size, align, ...otherProps } = props;

  if (!children) return null;
  return (
    <div className={cn(className, alert({ type, size, align }))} {...otherProps}>
      {type === "success" && <CheckCircleIcon data-slot="icon" />}
      {type === "info" && <InfoIcon data-slot="icon" />}
      {type === "warning" && <TriangleAlertIcon data-slot="icon" />}
      {type === "error" && <CircleXIcon data-slot="icon" />}
      <p className="leading-relaxed">{children}</p>
    </div>
  );
}
