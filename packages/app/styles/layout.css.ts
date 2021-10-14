import { createVar } from "@vanilla-extract/css";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const layout = defineProperties({
  properties: {
    display: ["inline", "block", "grid"],

    /* {
      stack: {
        display: "grid",
      },
      columns: {
        display: "grid",
        gridAutoFlow: "column",
      },
    }, */
  },
  shorthands: {
    layout: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});
