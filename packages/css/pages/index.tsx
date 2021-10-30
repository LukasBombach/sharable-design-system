import type { VFC, CSSProperties } from "react";
import type { NextPage } from "next";

type VertAlign = "top" | "center" | "bottom";
type HorAlign = "left" | "center" | "right";
type Layout = "stack" | "columns";

interface Styles {
  layout?: [Layout, Layout] | Layout;
  gap?: string;
  alignContent?: VertAlign | HorAlign | `${VertAlign} ${HorAlign}`;
}

const Home: NextPage = () => {
  return (
    <div
      className="layout:stack"
      style={{ "--num-columns": 3 } as CSSProperties}
    >
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </div>
  );
};

const Placeholder: VFC = () => (
  <div
    className="v-align:center h-align:center"
    style={{
      background: "#bbb",
      height: 200,
    }}
  >
    Placeholder
  </div>
);

export default Home;
