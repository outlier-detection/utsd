import * as React from "react";
import Example from "../components/table";
import { Block } from "baseui/block";

export default function Index() {
  return (
    <Block height="calc(100vh - 150px)">
      <Example />
    </Block>
  );
}
