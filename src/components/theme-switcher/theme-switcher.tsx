import { Menu } from "@/components/menu";
import { Fragment } from "react";
import {
  ChevronDownIcon,
  MonitorSmartphoneIcon,
  MoonIcon,
  SunIcon
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button, ButtonProps } from "@/components/button";

type ThemeSwitcherProps = Pick<ButtonProps, "size" | "variant" | "edge"> & {
  className?: string;
};

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { className, variant = "plain", size = "sm", edge } = props;

  const { theme, setTheme } = useTheme();

  return (
    <Menu>
      <Menu.Button as={Fragment}>
        <Button
          className={className}
          aria-label="theme switcher"
          variant={variant}
          color="secondary"
          size={size}
          edge={edge}
        >
          {(() => {
            switch (theme) {
              case "light":
                return (
                  <>
                    <SunIcon data-slot="start-icon" />
                    روشن
                  </>
                );
              case "dark":
                return (
                  <>
                    <MoonIcon data-slot="start-icon" />
                    تیره
                  </>
                );
              default:
                return (
                  <>
                    <MonitorSmartphoneIcon data-slot="start-icon" />
                    سیستم
                  </>
                );
            }
          })()}
          <ChevronDownIcon data-slot="dropdown-icon" />
        </Button>
      </Menu.Button>
      <Menu.Items anchor="bottom end">
        <Menu.Item aria-label="light" onClick={() => setTheme("light")}>
          <SunIcon data-slot="start-icon" />
          <Menu.Label>روشن</Menu.Label>
        </Menu.Item>
        <Menu.Item aria-label="dark" onClick={() => setTheme("dark")}>
          <MoonIcon data-slot="start-icon" />
          <Menu.Label>تیره</Menu.Label>
        </Menu.Item>
        <Menu.Item aria-label="system" onClick={() => setTheme("system")}>
          <MonitorSmartphoneIcon data-slot="start-icon" />
          <Menu.Label>سیستم</Menu.Label>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
