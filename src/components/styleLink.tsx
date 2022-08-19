import Link from "next/link";
import { StyledLink } from "baseui/link";

export default function StyleLink(props: { href: string; text: string }) {
  return (
    <Link href={props.href} passHref>
      <StyledLink>{props.text}</StyledLink>
    </Link>
  );
}
