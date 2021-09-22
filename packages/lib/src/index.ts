import { createTheme } from "@vanilla-extract/css";

export const [lightTheme, vars] = createTheme({
  color: {
    magenta: "#E20074",
    salemsfur: "#171B26",
    royalblue: "#00A0DE",
    trout: "#474C59",
    manatee: "#8D93A6",
    snow: "#FFFFFF",
    botticelli: "#CFD5E5",
    whitelilac: "#EBEFF7",
    alpine: "#F7F9FC",
    red: "#EE3F54",
    green: "#48C974",
    cararra: "#E7E6E0",
    inherit: "inherit",
  },
  space: {
    _0: "0px",
    _2: "2px",
    _4: "4px",
    _8: "8px",
    _12: "12px",
    _16: "16px",
    _24: "24px",
    _32: "32px",
    _40: "40px",
    _48: "48px",
  },
  radius: {
    _4: "4px",
    _8: "8px",
  },
});
