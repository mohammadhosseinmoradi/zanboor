"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@/components/tab";
import { cn } from "@/lib/utils";
import { CircleUserRoundIcon, ListTodoIcon } from "lucide-react";
import { UserProfileDto } from "@/modules/user/types";
import { Specification } from "@/modules/user/components/profile/specification";

type ProfileTabsProps = {
  data: UserProfileDto;
  className?: string;
};

export function ProfileTabs(props: ProfileTabsProps) {
  const { data, className } = props;

  return (
    <TabGroup className={cn("grow", className)}>
      <TabList className="[&>*]:w-full">
        <Tab className="text-on-surface-variant !w-auto text-center max-lg:grow">
          <CircleUserRoundIcon data-slot="start-icon" />
          مشخصات
        </Tab>
        <Tab className="text-on-surface-variant !w-auto text-center max-lg:grow">
          <ListTodoIcon data-slot="start-icon" />
          معیارها
        </Tab>
      </TabList>
      <TabPanels className="flex grow flex-col p-4 [&>*]:grow" swipeable>
        <TabPanel>
          <Specification data={data} />
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
