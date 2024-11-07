type FooterProps = { className?: string };

export default function Footer(props: FooterProps) {
  const { className } = props;

  return <footer className={className}></footer>;
}
