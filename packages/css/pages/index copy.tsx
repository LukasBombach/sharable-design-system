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
      className="layout"
      style={css({ layout: ["stack", "columns"], gap: "10px 40px" })}
    >
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </div>
  );
};

const Placeholder: VFC = () => (
  <div
    className="layout"
    style={css({
      alignContent: "center",
      background: "#bbb",
      height: 200,
    })}
  >
    Placeholder
  </div>
);

export default Home;

function getMobileLayout({ layout }: Styles) {
  const [mobileLayout] = Array.isArray(layout) ? layout : [layout];
  return mobileLayout === "columns" ? "column" : undefined;
}

function getDesktopLayout({ layout }: Styles) {
  const [, desktopLayout] = Array.isArray(layout) ? layout : [layout];
  return desktopLayout === "columns" ? "column" : "row";
}

function getGap({ gap }: Styles) {
  return gap;
}

function getVAlign({ alignContent }: Styles) {
  if (!alignContent) return undefined;
  if (alignContent === "center") return "center";
  const [vertAlign] = alignContent.split(" ");
  const alignMap = { top: "start", center: "center", bottom: "end" };
  return alignMap[vertAlign];
}

function getHAlign({ alignContent }: Styles) {
  if (!alignContent) return undefined;
  if (alignContent === "center") return "center";
  const [, horAlign] = alignContent.split(" ");
  const alignMap = { left: "start", center: "center", right: "end" };
  return alignMap[horAlign];
}

function css({
  layout,
  gap,
  alignContent,
  ...styles
}: Styles & CSSProperties): CSSProperties {
  return {
    "--layout": getMobileLayout({ layout }),
    "--layout-desktop": getDesktopLayout({ layout }),
    "--gap": getGap({ gap }),
    "--vertical-align": getVAlign({ alignContent }),
    "--horizontal-align": getHAlign({ alignContent }),
    ...styles,
  } as CSSProperties;
}
