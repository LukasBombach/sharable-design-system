import { createVar } from "@vanilla-extract/css";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const layout = defineProperties({
  properties: {
    gap: [10, 20, 30, 40],
    layout: {
      stack: {
        display: "grid",
      },
      columns: {
        display: "grid",
        gridAutoFlow: "column",
      },
    },
  },
});
