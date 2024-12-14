import { useId, ReactNode } from "react";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";
import { NavLink } from "@/components/nav-link";
import {
  HeadsetIcon,
  HeartIcon,
  LucideProps,
  MessageSquareTextIcon,
  SlashIcon,
  UserRoundIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/badge";

type MobileBottomNavBarProps = {
  className?: string;
};

export default function NavBar(props: MobileBottomNavBarProps) {
  const { className } = props;

  const id = useId();

  return (
    <>
      <div
        className={cn(
          "bg-surface-bright text-on-surface flex items-center justify-center overflow-hidden border-t",
          className
        )}
        suppressHydrationWarning
      >
        <Item href={routes.home} icon={SlashIcon} label="ویترین" layoutId={id} />
        <Item href={routes.counselor} icon={HeadsetIcon} label="مشاور" layoutId={id} />
        <Item href={routes.favorites} icon={HeartIcon} label="علاقمندی‌ها" layoutId={id} />
        <Item href={routes.messages} icon={MessageSquareTextIcon} label="پیام‌ها" layoutId={id} />
        <Item href={routes.profile.index} icon={UserRoundIcon} label="پروفایل" layoutId={id} />
      </div>
    </>
  );
}

type ItemProps = {
  icon: (props: LucideProps) => ReactNode;
  label: ReactNode;
  href: string;
  layoutId: string;
  badge?: number;
};

function Item(props: ItemProps) {
  const { icon: Icon, label, href, layoutId, badge } = props;

  return (
    <NavLink
      href={href}
      className={cn(
        "group text-on-surface-variant data-[active]:text-on-surface relative flex size-full grow flex-col items-center justify-start transition",
        "pt-4 pb-4"
      )}
    >
      {({ active }) => (
        <>
          <div className="relative z-10 flex flex-col items-center justify-center gap-2">
            <span className="relative">
              <Icon className="size-6" />
              {!!badge && <Badge anchor="topEnd">{badge}</Badge>}
            </span>
            <span className="text-2xs line-clamp-2 text-center font-bold transition group-data-[active]:translate-y-1.5">
              {label}
            </span>
          </div>
          {active && (
            <motion.span
              className="bg-primary/20 absolute top-2 flex h-10 w-[calc(100%-theme(spacing[4]))] rounded-4xl"
              initial={false}
              layoutId={layoutId}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            />
          )}
        </>
      )}
    </NavLink>
  );
}
