import { createElement } from "react";
import { perpetual } from "styles/perpetual.css";

import type { FC, CSSProperties } from "react";
import type { NextPage } from "next";

type Styles = Parameters<typeof perpetual>[0] & {
  style?: CSSProperties;
};

function styled<TagName extends keyof JSX.IntrinsicElements>(
  tagName: TagName,
  { style, ...styles }: Styles
): FC<Omit<JSX.IntrinsicElements[TagName], "style">> {
  const perpetualStyles = perpetual(styles);

  const Component: FC<Omit<JSX.IntrinsicElements[TagName], "style">> = ({
    children,
    className,
    ...props
  }) => {
    const extendedClassNames = className
      ? `${className} ${perpetualStyles}`
      : perpetualStyles;
    const extendedProps = Object.assign({}, props, {
      className: extendedClassNames,
      style,
    });
    return createElement(tagName, extendedProps, children);
  };
  Component.displayName = `<${tagName}>`;

  return Component;
}

const Container = styled("main", {
  layout: "columns",
  gap: 30,
});

const Placeholder = styled("div", {
  style: {
    background: "#ddd",
  },
});

const Home: NextPage = () => {
  return (
    <Container>
      <Placeholder>x</Placeholder>
      <Placeholder>x</Placeholder>
      <Placeholder>x</Placeholder>
    </Container>
  );
};

export default Home;
