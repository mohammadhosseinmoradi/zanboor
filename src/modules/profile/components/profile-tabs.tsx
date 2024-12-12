"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@/components/tab";
import { Personal } from "@/modules/profile/components/personal";
import { cn } from "@/lib/utils";
import { ProfileDto } from "@/modules/profile/types";
import { PhysicalAttributes } from "@/modules/profile/components/physical-attributes";
import { EducationAndCareer } from "@/modules/profile/components/educationAndCareer";

type ProfileTabsProps = {
  data: ProfileDto;
  className?: string;
};

export function ProfileTabs(props: ProfileTabsProps) {
  const { data, className } = props;

  return (
    <TabGroup className={cn("", className)}>
      <TabList className="[&>*]:w-full">
        <Tab className="!w-auto text-center max-lg:grow">مشخصات عمومی</Tab>
        <Tab className="!w-auto text-center max-lg:grow">مشخصات ظاهری</Tab>
        <Tab className="!w-auto text-center max-lg:grow">تحصیلات و شغل</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Personal data={data.personal} />
        </TabPanel>
        <TabPanel>
          <PhysicalAttributes data={data.physicalAttributes} />
        </TabPanel>
        <TabPanel>
          <EducationAndCareer data={data.educationAndCareer} />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
