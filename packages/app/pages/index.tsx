import { createElement } from "react";
import { perpetual } from "styles/perpetual.css";

import type { FC } from "react";
import type { NextPage } from "next";

function styled<TagName extends keyof JSX.IntrinsicElements>(
  tagName: TagName,
  styles: Parameters<typeof perpetual>[0]
): FC<JSX.IntrinsicElements[TagName]> {
  const perpetualStyles = perpetual(styles);

  const Component: FC<JSX.IntrinsicElements[TagName]> = ({
    children,
    className,
    ...props
  }) => {
    const extendedClassNames = className
      ? `${className} ${perpetualStyles}`
      : perpetualStyles;
    const extendedProps = { ...props, className: extendedClassNames };
    return createElement(tagName, extendedProps, children);
  };
  Component.displayName = `<${tagName}>`;

  return Component;
}

const Container = styled("main", {
  layout: "columns",
});

const Home: NextPage = () => {
  return <Container>hello world</Container>;
};

export default Home;
