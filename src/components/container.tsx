import { Block } from "baseui/block";
import { ReactNode } from "react";

export default function Container({ children }: { children?: ReactNode }) {
  return (
    <Block maxWidth={"1280px"} margin={"auto"}>
      {children}
    </Block>
  );
}
