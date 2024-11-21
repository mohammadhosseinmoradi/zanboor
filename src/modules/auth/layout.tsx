import { FormEvent, ReactNode } from "react";
import { routes } from "@/lib/constants/routes";
import { Link } from "@/components/link";
import { ConditionLink } from "@/components/condition-link";
import { ThemeImage } from "@/components/theme-image";
import { Text } from "@/components/text";

type LayoutProps = {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  title?: string;
  children?: ReactNode;
  header?: ReactNode;
  logoLink?: string;
  onClose?: () => void;
};

export function Layout(props: LayoutProps) {
  const { onSubmit, children, header, title, logoLink, onClose } = props;

  return (
    <form onSubmit={onSubmit} className="pointer-events-auto flex flex-col">
      {header && <div>{header}</div>}
      <ConditionLink href={logoLink}>
        <ThemeImage
          srcLight="/images/logo.jpg"
          srcDark="/images/logo.jpg"
          className="mx-auto size-28 cursor-pointer object-contain rounded-rounded"
          width={200}
          height={200}
          onClick={onClose}
          alt=""
        />
      </ConditionLink>
      <h4 className="mt-4 text-center">{title}</h4>
      {children}
      <div className="mt-6 flex flex-col">
        <Text variant="caption">
          <span>ورود شما به معنای پذیرش </span>
          <Link href={routes.terms} className="font-bold text-primary" onClick={onClose}>
            شرایط زنبور
          </Link>
          <span> و </span>
          <Link
            href={routes.privacy}
            className="font-bold text-primary"
            onClick={onClose}
          >
            قوانین حریم خصوصی
          </Link>
          <span> است.</span>
        </Text>
      </div>
    </form>
  );
}
