import type { VFC } from "react";
import type { NextPage } from "next";

type VertAlign = "top" | "center" | "bottom";
type HorAlign = "left" | "center" | "right";

interface Styles {
  layout?: "stack" | "columns";
  alignContent?: VertAlign | HorAlign | `${VertAlign} ${HorAlign}`;
}

function css(styles: Styles) {}

css({
  layout: "stack",
  alignContent: "top right",
});

const Placeholder: VFC = () => (
  <div
    className="layout:item"
    style={{
      "--vertical-align": "center",
      "--horizontal-align": "center",
      background: "#bbb",
      height: 200,
    }}
  >
    Placeholder
  </div>
);

const Home: NextPage = () => {
  return (
    <div
      className="layout:container"
      style={{
        "--layout": "column",
        "--columns": 3,
        "--gap": "10px 40px",
      }}
    >
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </div>
  );
};

export default Home;
