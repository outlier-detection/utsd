import Link from "next/link";
import { StyledLink } from "baseui/link";

export default function StyleLink(props: { href: string; text: string; onClick?: (e: any) => void }) {
  return (
    <Link href={props.href} passHref>
      <StyledLink onClick={props.onClick}>{props.text}</StyledLink>
    </Link>
  );
}
