import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

export type LayoutAtoms = Parameters<typeof layoutAtoms>[0];

const padding = [10, 20, 30, 40] as const;

export const layoutAtoms = createSprinkles(
  defineProperties({
    properties: {
      padding,
      flow: {
        stack: {
          display: "grid",
        },
        columns: {
          display: "grid",
          gridAutoFlow: "column",
        },
      },
    },
  })
);
