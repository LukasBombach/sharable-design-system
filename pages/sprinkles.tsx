import { layoutAtoms } from "sprinkles/layout.css";

import type { NextPage } from "next";
import type { FC } from "react";
import type { LayoutAtoms } from "sprinkles/layout.css";

type LayoutProps = LayoutAtoms & {
  tag?: keyof JSX.IntrinsicElements;
};

const Layout: FC<LayoutProps> = ({ tag: Tag = "div", children, ...atoms }) => {
  return <Tag className={layoutAtoms(atoms)}>{children}</Tag>;
};

const Home: NextPage = () => {
  return (
    <Layout tag="main" flow="columns" padding={20}>
      <div>a</div>
      <div>b</div>
      <div>c</div>
    </Layout>
  );
};

export default Home;
