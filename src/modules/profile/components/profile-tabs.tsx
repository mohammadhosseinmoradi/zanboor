"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@/components/tab";
import { Specification } from "@/modules/profile/components/specification";
import { cn } from "@/lib/utils";
import { ProfileDto } from "@/modules/profile/types";
import { CircleUserRoundIcon, ListTodoIcon } from "lucide-react";
import { MarriagePreferences } from "@/modules/profile/components/marriage-preferences";

type ProfileTabsProps = {
  data: ProfileDto;
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
