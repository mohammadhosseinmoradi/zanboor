"use client";

import { cn } from "@/lib/utils";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/description-list";
import {
  getEducationLevelTranslated,
  getHealthStatusTranslated,
  getMaritalStatusTranslated,
  getPersonalityTypeTranslated,
  getSkinColorTranslated,
  getTheirCarStatusTranslated,
  getTheirChildrenStatusTranslated,
  getTheirHousingStatusTranslated,
  hasChildrenStatus,
} from "@/modules/utils";
import { MarriagePreferencesUserDto } from "@/modules/user/types";

type MarriagePreferencesProps = {
  data: MarriagePreferencesUserDto;
  className?: string;
};

export function MarriagePreferences(props: MarriagePreferencesProps) {
  const { data, className } = props;

  return (
    <div className={cn("flex w-full flex-col", className)}>
      <DescriptionList className="grid w-full grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-[auto_1fr_auto_1fr]">
        <DescriptionTerm>سن</DescriptionTerm>
        <DescriptionDetails>{[data.ageMin, "تا", data.ageMax].join(" ")}</DescriptionDetails>
        <DescriptionTerm>قد</DescriptionTerm>
        <DescriptionDetails>{[data.heightMin, "تا", data.heightMax].join(" ")}</DescriptionDetails>
        <DescriptionTerm>جنسیت</DescriptionTerm>
        <DescriptionDetails>
          {data.maritalStatuses.map(getMaritalStatusTranslated).join("، ")}
        </DescriptionDetails>
        <DescriptionTerm>رنگ پوست</DescriptionTerm>
        <DescriptionDetails>
          {data.skinColors.map(getSkinColorTranslated).join("، ")}
        </DescriptionDetails>
        <div className="col-span-full border-b" />
        <DescriptionTerm>وضعیت تاهل</DescriptionTerm>
        <DescriptionDetails>
          {!data.maritalStatuses.length && "مهم نیست"}
          {data.maritalStatuses.map(getMaritalStatusTranslated).join("، ")}
        </DescriptionDetails>
        {data.childrenStatus && hasChildrenStatus(data.maritalStatuses) && (
          <>
            <DescriptionTerm>فرزند</DescriptionTerm>
            <DescriptionDetails>
              {getTheirChildrenStatusTranslated(data.childrenStatus)}
            </DescriptionDetails>
          </>
        )}
        <div className="col-span-full border-b" />
        <DescriptionTerm>وضعیت سلامت</DescriptionTerm>
        <DescriptionDetails>
          {!data.healthStatuses.length && "مهم نیست"}
          {data.healthStatuses.map(getHealthStatusTranslated).join("، ")}
        </DescriptionDetails>
        <DescriptionTerm>تیپ‌ شخصیتی</DescriptionTerm>
        <DescriptionDetails>
          {!data.preferredPersonalityTypes.length && "مهم نیست"}
          {data.preferredPersonalityTypes.map(getPersonalityTypeTranslated).join("، ")}
        </DescriptionDetails>
        <div className="col-span-full border-b" />
        <DescriptionTerm>تحصیلات</DescriptionTerm>
        <DescriptionDetails>
          {data.educationLevels.map(getEducationLevelTranslated).join("، ")}
        </DescriptionDetails>
        <DescriptionTerm>وضعیت مسکن</DescriptionTerm>
        <DescriptionDetails>
          {!data.housingStatuses.length && "مهم نیست"}
          {data.housingStatuses.map(getTheirHousingStatusTranslated).join("، ")}
        </DescriptionDetails>
        <DescriptionTerm>وضعیت خودرو</DescriptionTerm>
        <DescriptionDetails>
          {!data.carStatuses.length && "مهم نیست"}
          {data.carStatuses.map(getTheirCarStatusTranslated).join("، ")}
        </DescriptionDetails>
        <DescriptionTerm>توضیحات اضافی</DescriptionTerm>
        <DescriptionDetails>{data.additionalNote}</DescriptionDetails>
      </DescriptionList>
    </div>
  );
}
