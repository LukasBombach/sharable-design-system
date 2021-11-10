import type { VFC, CSSProperties } from "react";
import type { NextPage } from "next";

interface Stylable {
  className?: string;
  style?: CSSProperties;
}

const Placeholder: VFC<Stylable> = ({ className, style }) => (
  <div
    className={`h:center v:center ${className}`}
    style={{ height: 200, background: "lightgrey", ...style }}
  >
    Placeholder
  </div>
);

const Home: NextPage = () => {
  return (
    <div className="w:page h:center">
      <div className="layout:companion">
        <Placeholder className="layout:companion:place:companion" />
        <Placeholder className="layout:companion:place:content" />
      </div>
    </div>
  );
};

export default Home;
