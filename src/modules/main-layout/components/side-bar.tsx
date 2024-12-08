import { cn } from "@/lib/utils";
import {
  HeartIcon,
  LucideProps,
  MessageSquareTextIcon,
  SearchIcon,
  SlashIcon,
  UserRoundIcon,
} from "lucide-react";
import { ReactNode, useId } from "react";
import { NavLink } from "@/components/nav-link";
import { Badge } from "@/components/badge";
import { motion } from "framer-motion";
import { routes } from "@/lib/constants/routes";
import { Link } from "@/components/link";
import { ThemeImage } from "@/components/theme-image";

type SideBarProps = {
  className?: string;
};

export default function SideBar(props: SideBarProps) {
  const { className } = props;

  const id = useId();

  return (
    <div
      className={cn(
        "bg-surface flex h-dvh w-72 flex-col overflow-y-auto border-e px-4 py-6",
        className
      )}
    >
      <Link href="/" className="mx-auto">
        <ThemeImage
          srcLight="/images/logo-with-text.png"
          srcDark="/images/logo-with-text.png"
          className="size-32 cursor-pointer rounded-lg object-contain"
          width={200}
          height={200}
          alt="logo"
        />
      </Link>
      <div className="mt-6 flex grow flex-col">
        <Item href={routes.home} icon={SlashIcon} label="ویترین" layoutId={id} />
        <Item href={routes.search} icon={SearchIcon} label="جستجو" layoutId={id} />
        <Item href={routes.favorites} icon={HeartIcon} label="علاقمندی‌ها" layoutId={id} />
        <Item href={routes.messages} icon={MessageSquareTextIcon} label="پیام‌ها" layoutId={id} />
        <Item href={routes.profile} icon={UserRoundIcon} label="پروفایل" layoutId={id} />
      </div>
    </div>
  );
}

type ItemProps = {
  icon: (props: LucideProps) => ReactNode;
  label: ReactNode;
  href: string;
  layoutId: string;
  badge?: number;
  activeChildren?: boolean;
};

function Item(props: ItemProps) {
  const { icon: Icon, label, href, layoutId, badge } = props;

  return (
    <NavLink
      href={href}
      className={cn(
        "group hover:text-on-surface data-[active]:text-on-surface-hover relative transition",
        "flex items-center justify-start gap-4",
        "py-1"
      )}
    >
      {({ active }) => (
        <>
          <div className="relative flex w-full items-center gap-4 px-4 py-2.5">
            <span className="relative">
              <Icon className="text-on-surface-variant group-data-[active]:text-on-surface size-6 transition" />
              {!!badge && <Badge anchor="topEnd">{badge}</Badge>}
            </span>
            <span className="text-on-surface-variant group-data-[active]:text-on-surface line-clamp-2 text-center text-sm font-bold">
              {label}
            </span>
            {active && (
              <motion.span
                className="bg-primary/20 absolute inset-0 flex rounded-4xl"
                initial={false}
                layoutId={layoutId}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              />
            )}
          </div>
        </>
      )}
    </NavLink>
  );
}
