"use client";

import { cn } from "@/lib/utils";
import { PhysicalAttributesDto } from "@/modules/profile/types";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/description-list";
import { getSkinColorTranslated } from "@/modules/profile/utils";

type PhysicalAttributesProps = {
  data: PhysicalAttributesDto;
  className?: string;
};

export function PhysicalAttributes(props: PhysicalAttributesProps) {
  const { data, className } = props;

  return (
    <div className={cn("flex w-full flex-col", className)}>
      <DescriptionList className="mt-6 grid w-full grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-[auto_1fr_auto_1fr]">
        <DescriptionTerm>قد</DescriptionTerm>
        <DescriptionDetails>{data.height}</DescriptionDetails>
        <DescriptionTerm>وزن</DescriptionTerm>
        <DescriptionDetails>{data.weight}</DescriptionDetails>
        <DescriptionTerm>رنگ پوست</DescriptionTerm>
        <DescriptionDetails>{getSkinColorTranslated(data.skinColor)}</DescriptionDetails>
      </DescriptionList>
    </div>
  );
}
