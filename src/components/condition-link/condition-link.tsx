import Link from "next/link";

type ConditionLinkProps = Omit<Parameters<typeof Link>[0], "href"> & {
  href?: string;
};

export function ConditionLink(props: ConditionLinkProps) {
  const { href, children, ...otherProps } = props;

  if (!href) return children;
  return (
    <Link href={href} {...otherProps}>
      {children}
    </Link>
  );
}
