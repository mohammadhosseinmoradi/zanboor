"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@/components/tab";
import { cn } from "@/lib/utils";
import { CircleUserRoundIcon, ListTodoIcon } from "lucide-react";
import { ProfileUserDto } from "@/modules/user/types";
import { Specification } from "@/modules/user/components/profile/specification";
import { MarriagePreferences } from "@/modules/user/components/profile/marriage-preferences";

type ProfileTabsProps = {
  data: ProfileUserDto;
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
        <TabPanel>
          <MarriagePreferences data={data.marriagePreferences} />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
