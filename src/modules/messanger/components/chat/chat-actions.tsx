"use client";

import { Menu } from "@/components/menu";
import { Fragment } from "react";
import { Button } from "@/components/button";
import { EllipsisVerticalIcon, LockIcon, Trash2Icon } from "lucide-react";

export function ChatActions() {
  return (
    <Menu>
      <Menu.Button as={Fragment}>
        <Button variant="plain" color="secondary">
          <EllipsisVerticalIcon data-slot="icon" />
        </Button>
      </Menu.Button>
      <Menu.Items anchor="bottom end">
        <Menu.Item>
          <LockIcon data-slot="start-icon" />
          <Menu.Label>مسدود کردن</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <Trash2Icon data-slot="start-icon" />
          <Menu.Label>حذف گفت‌وگو</Menu.Label>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
