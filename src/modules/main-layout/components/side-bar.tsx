import { cn } from "@/lib/utils";
import {
  HeadsetIcon,
  HeartIcon,
  LucideProps,
  MessageSquareTextIcon,
  SlashIcon,
  SunMoonIcon,
  UserRoundIcon
} from "lucide-react";
import { ReactNode, useId } from "react";
import { NavLink } from "@/components/nav-link";
import { motion } from "framer-motion";
import { routes } from "@/lib/constants/routes";
import { Link } from "@/components/link";
import { ThemeImage } from "@/components/theme-image";
import MenuItem from "@/components/menu-item";
import dynamic from "next/dynamic";

const ThemeSwitcher = dynamic(() =>
  import("@/components/theme-switcher").then((mod) => mod.ThemeSwitcher)
);

type SideBarProps = {
  className?: string;
};

export default function SideBar(props: SideBarProps) {
  const { className } = props;

  const id = useId();

  return (
    <div
      className={cn(
        "bg-surface-container flex w-72 flex-col overflow-y-auto border-e p-4",
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
        <Item
          href={routes.home}
          icon={SlashIcon}
          label="ویترین"
          layoutId={id}
        />
        <Item
          href={routes.counselor}
          icon={HeadsetIcon}
          label="مشاور"
          layoutId={id}
        />
        <Item
          href={routes.favorites}
          icon={HeartIcon}
          label="علاقمندی‌ها"
          layoutId={id}
        />
        <Item
          href={routes.messages.index}
          icon={MessageSquareTextIcon}
          label="پیام‌ها"
          layoutId={id}
        />
        <Item
          href={routes.profile.index}
          icon={UserRoundIcon}
          label="پروفایل"
          layoutId={id}
        />
      </div>
      <MenuItem
        as="label"
        className="-mx-2 p-2"
        title="زمینه"
        startSlot={({ className, ...otherProps }) => (
          <SunMoonIcon
            className={cn("text-on-surface-variant size-6", className)}
            {...otherProps}
          />
        )}
        endSlot={(props) => <ThemeSwitcher edge="end" {...props} />}
      />
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
  const { icon: Icon, label, href, layoutId } = props;

  return (
    <NavLink
      href={href}
      className={cn(
        "group relative",
        "text-on-surface-variant data-active:text-on-surface data-active-children:text-on-surface transition",
        "hover:text-on-surface px-4 py-3"
      )}
    >
      {({ active, activeChildren }) => (
        <>
          <div className="relative z-1 flex items-center justify-start gap-4">
            <Icon className="size-6" />
            <span className="line-clamp-1 text-start text-sm font-bold">
              {label}
            </span>
          </div>
          {(active || (activeChildren && href != "/")) && (
            <motion.span
              className="dark:bg-primary-900 bg-primary-200 absolute inset-x-0 inset-y-0.5 flex rounded-4xl shadow-sm"
              initial={false}
              layoutId={layoutId}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
            />
          )}
        </>
      )}
    </NavLink>
  );
}
