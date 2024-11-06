import FeatherIcon from "@/components/deprecated/icon/FeatherIcon";
import { useTranslations } from "next-intl";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchInput({ value, onChange }: SearchInputProps) {
  const t = useTranslations();
  return (
    <div className="relative w-full">
      <FeatherIcon
        name="search"
        className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-lg text-fg-disabled"
      />
      <input
        className="w-full bg-bg py-3 pe-4 ps-12 transition-all"
        placeholder={t("search")}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}
