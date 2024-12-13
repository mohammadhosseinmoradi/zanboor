"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@/components/tab";
import { Specification } from "@/modules/profile/components/specification";
import { cn } from "@/lib/utils";
import { ProfileDto } from "@/modules/profile/types";

type ProfileTabsProps = {
  data: ProfileDto;
  className?: string;
};

export function ProfileTabs(props: ProfileTabsProps) {
  const { data, className } = props;

  return (
    <TabGroup className={cn("grow", className)}>
      <TabList className="[&>*]:w-full">
        <Tab className="text-on-surface-variant !w-auto text-center max-lg:grow">مشخصات کلی</Tab>
        <Tab className="text-on-surface-variant !w-auto text-center max-lg:grow">
          معیار‌های ازدواج
        </Tab>
        <Tab className="text-on-surface-variant !w-auto text-center max-lg:grow">بتل</Tab>
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
