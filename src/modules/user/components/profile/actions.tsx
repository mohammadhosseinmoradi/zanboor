"use client";

import { Menu } from "@/components/menu";
import { Fragment } from "react";
import { Button } from "@/components/button";
import { BanIcon, EllipsisVerticalIcon, ShieldAlertIcon } from "lucide-react";

type ActionsProps = {
  className?: string;
};

export function Actions(props: ActionsProps) {
  const { className } = props;

  return (
    <Menu>
      <Menu.Button as={Fragment}>
        <Button variant="plain" color="secondary" className={className}>
          <EllipsisVerticalIcon data-slot="icon" />
        </Button>
      </Menu.Button>
      <Menu.Items anchor="bottom end">
        <Menu.Item>
          <BanIcon data-slot="start-icon" />
          <Menu.Label>مسدود کردن</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <ShieldAlertIcon data-slot="start-icon" />
          <Menu.Label>گزارش</Menu.Label>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
