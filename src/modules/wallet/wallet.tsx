import { cn } from "@/lib/utils";
import { CircleDollarSignIcon } from "lucide-react";

type WalletProps = {
  className?: string;
};

export function Wallet(props: WalletProps) {
  const { className } = props;

  return (
    <div className={cn("flex flex-col", className)}>
      <CircleDollarSignIcon className="text-primary mt-10 size-20 self-center" />
      <h2 className="text-on-surface-variant mt-6 self-center text-base">
        موجودی
      </h2>
      <p className="text-on-surface mt-2 self-center text-2xl font-extrabold">
        {(50000).toLocaleString("fa-IR")}
        <span className="text-on-surface-variant ms-2 text-base">سکه</span>
      </p>
    </div>
  );
}
