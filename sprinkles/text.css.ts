import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

export type TextAtoms = Parameters<typeof textAtoms>[0];

const padding = [10, 20, 30, 40] as const;

export const textAtoms = createSprinkles(
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
