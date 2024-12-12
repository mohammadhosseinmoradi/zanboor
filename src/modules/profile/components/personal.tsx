"use client";

import { cn } from "@/lib/utils";
import { PersonalDto } from "@/modules/profile/types";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/description-list";
import { getGenderTranslated, getMaritalStatusTranslated } from "@/modules/profile/utils";

type PersonalProps = {
  data: PersonalDto;
  className?: string;
};

export function Personal(props: PersonalProps) {
  const { data, className } = props;

  return (
    <div className={cn("flex w-full flex-col", className)}>
      <DescriptionList className="grid w-full grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-[auto_1fr_auto_1fr]">
        <DescriptionTerm>نام</DescriptionTerm>
        <DescriptionDetails>{data.firstName}</DescriptionDetails>
        <DescriptionTerm>نام خانوادگی</DescriptionTerm>
        <DescriptionDetails>{data.lastName}</DescriptionDetails>
        <DescriptionTerm>نام نمایشی</DescriptionTerm>
        <DescriptionDetails>{data.displayName}</DescriptionDetails>
        <DescriptionTerm>جنسیت</DescriptionTerm>
        <DescriptionDetails>{getGenderTranslated(data.gender)}</DescriptionDetails>
        <DescriptionTerm>وضعیت تاهل</DescriptionTerm>
        <DescriptionDetails>{getMaritalStatusTranslated(data.maritalStatus)}</DescriptionDetails>
      </DescriptionList>
    </div>
  );
}
