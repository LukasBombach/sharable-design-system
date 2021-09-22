import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from ".";

const base = style({ borderRadius: vars.radius._4 });

const primary = {
  backgroundColor: vars.color.magenta,
  color: vars.color.snow,
  ":hover": {
    backgroundColor: vars.color.salemsfur,
  },
};

const secondary = {
  backgroundColor: vars.color.inherit,
  borderColor: vars.color.magenta,
  color: vars.color.magenta,
  ":hover": {
    borderColor: vars.color.salemsfur,
  },
};

export const button = styleVariants({
  primary: [base, primary],
  secondary: [base, secondary],
});
