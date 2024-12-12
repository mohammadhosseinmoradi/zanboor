"use client";

import { cn } from "@/lib/utils";
import { EducationAndCareerDto } from "@/modules/profile/types";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/description-list";
import {
  getEducationLevelTranslated,
  getEmploymentStatusTranslated,
} from "@/modules/profile/utils";

type EducationAndCareerProps = {
  data: EducationAndCareerDto;
  className?: string;
};

export function EducationAndCareer(props: EducationAndCareerProps) {
  const { data, className } = props;

  return (
    <div className={cn("flex w-full flex-col", className)}>
      <DescriptionList className="mt-6 grid w-full grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-[auto_1fr_auto_1fr]">
        <DescriptionTerm>اشتغال</DescriptionTerm>
        <DescriptionDetails>
          {getEmploymentStatusTranslated(data.employmentStatus)}
        </DescriptionDetails>
        <DescriptionTerm>عنوان شغلی</DescriptionTerm>
        <DescriptionDetails>{data.jobTitle}</DescriptionDetails>
        <DescriptionTerm>سطح تحصیلات</DescriptionTerm>
        <DescriptionDetails>{getEducationLevelTranslated(data.educationLevel)}</DescriptionDetails>
        <DescriptionTerm>رشته تحصیلی</DescriptionTerm>
        <DescriptionDetails>{data.fieldOfStudy}</DescriptionDetails>
      </DescriptionList>
    </div>
  );
}
