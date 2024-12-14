"use client";

import { cn } from "@/lib/utils";
import { ProfileDto } from "@/modules/profile/types";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/description-list";
import {
  getBeautyLevelTranslated,
  getCarStatusTranslated,
  getEducationLevelTranslated,
  getEmploymentStatusTranslated,
  getEthnicityTranslated,
  getGenderTranslated,
  getHousingStatusTranslated,
  getMaritalStatusTranslated,
  getSkinColorTranslated,
  getStyleLevelTranslated,
} from "@/modules/utils";

type PersonalProps = {
  data: ProfileDto;
  className?: string;
};

export function Specification(props: PersonalProps) {
  const { data, className } = props;

  return (
    <div className={cn("flex w-full flex-col", className)}>
      <DescriptionList className="grid w-full grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-[auto_1fr_auto_1fr]">
        <DescriptionTerm>نام</DescriptionTerm>
        <DescriptionDetails>{data.personal.firstName}</DescriptionDetails>
        <DescriptionTerm>نام خانوادگی</DescriptionTerm>
        <DescriptionDetails>{data.personal.lastName}</DescriptionDetails>
        <DescriptionTerm>نام نمایشی</DescriptionTerm>
        <DescriptionDetails>{data.personal.displayName}</DescriptionDetails>
        <DescriptionTerm>جنسیت</DescriptionTerm>
        <DescriptionDetails>{getGenderTranslated(data.personal.gender)}</DescriptionDetails>
        <DescriptionTerm>وضعیت تاهل</DescriptionTerm>
        <DescriptionDetails>
          {getMaritalStatusTranslated(data.personal.maritalStatus)}
        </DescriptionDetails>
        <div className="col-span-full border-b" />
        <DescriptionTerm>قد</DescriptionTerm>
        <DescriptionDetails>{data.physicalAttributes.height}</DescriptionDetails>
        <DescriptionTerm>وزن</DescriptionTerm>
        <DescriptionDetails>{data.physicalAttributes.weight}</DescriptionDetails>
        <DescriptionTerm>رنگ پوست</DescriptionTerm>
        <DescriptionDetails>
          {getSkinColorTranslated(data.physicalAttributes.skinColor)}
        </DescriptionDetails>
        <DescriptionTerm>میزان زیبایی</DescriptionTerm>
        <DescriptionDetails>
          {getBeautyLevelTranslated(data.physicalAttributes.beautyLevel)}
        </DescriptionDetails>
        <DescriptionTerm>تیب و استایل</DescriptionTerm>
        <DescriptionDetails>
          {getStyleLevelTranslated(data.physicalAttributes.styleLevel)}
        </DescriptionDetails>
        <div className="col-span-full border-b" />
        <DescriptionTerm>اشتغال</DescriptionTerm>
        <DescriptionDetails>
          {getEmploymentStatusTranslated(data.educationAndCareer.employmentStatus)}
        </DescriptionDetails>
        <DescriptionTerm>عنوان شغلی</DescriptionTerm>
        <DescriptionDetails>{data.educationAndCareer.jobTitle}</DescriptionDetails>
        <DescriptionTerm>سطح تحصیلات</DescriptionTerm>
        <DescriptionDetails>
          {getEducationLevelTranslated(data.educationAndCareer.educationLevel)}
        </DescriptionDetails>
        <DescriptionTerm>رشته تحصیلی</DescriptionTerm>
        <DescriptionDetails>{data.educationAndCareer.fieldOfStudy}</DescriptionDetails>
        <div className="col-span-full border-b" />
        <DescriptionTerm>حدود درآمد</DescriptionTerm>
        <DescriptionDetails>
          {data.financialStatus.personalIncome.toLocaleString("fa-IR")}
        </DescriptionDetails>
        <DescriptionTerm>وضعیت خودرو</DescriptionTerm>
        <DescriptionDetails>
          {getCarStatusTranslated(data.financialStatus.carStatus)}
        </DescriptionDetails>
        <DescriptionTerm>وضعیت مسکن</DescriptionTerm>
        <DescriptionDetails>
          {getHousingStatusTranslated(data.financialStatus.housingStatus)}
        </DescriptionDetails>
        <div className="col-span-full border-b" />
        <DescriptionTerm>تحصیلات پدر</DescriptionTerm>
        <DescriptionDetails>
          {getEducationLevelTranslated(data.familyInfo.fatherEducation)}
        </DescriptionDetails>
        <DescriptionTerm>تحصیلات مادر</DescriptionTerm>
        <DescriptionDetails>
          {getEducationLevelTranslated(data.familyInfo.motherEducation)}
        </DescriptionDetails>
        <DescriptionTerm>قومیت پدر</DescriptionTerm>
        <DescriptionDetails>
          {getEthnicityTranslated(data.familyInfo.fatherEthnicity)}
        </DescriptionDetails>
        <DescriptionTerm>قومیت مادر</DescriptionTerm>
        <DescriptionDetails>
          {getEthnicityTranslated(data.familyInfo.motherEthnicity)}
        </DescriptionDetails>
        <DescriptionTerm>فرزند</DescriptionTerm>
        <DescriptionDetails>{data.familyInfo.siblingPosition}</DescriptionDetails>
        <DescriptionTerm>تعداد برادر</DescriptionTerm>
        <DescriptionDetails>{data.familyInfo.brothersCount}</DescriptionDetails>
        <DescriptionTerm>تعداد خواهر</DescriptionTerm>
        <DescriptionDetails>{data.familyInfo.sistersCount}</DescriptionDetails>
        <DescriptionTerm>خواهر یا برادر متاهل</DescriptionTerm>
        <DescriptionDetails>{data.familyInfo.hasMarriedSiblings || "نامشخص"}</DescriptionDetails>
      </DescriptionList>
    </div>
  );
}
