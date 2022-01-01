/**
 * Layout Container
 * todo other layout types
 * todo custom layout
 */
export const layout = (layoutType: "stack" | "columns", gap?: number) => {
  const stack = { display: "grid", gridGap: gap, gridAutoFlow: "row" };
  const columns = { display: "grid", gridGap: gap, gridAutoFlow: "column" };
};

/**
 * LayoutItem
 * Properties of an item inside a layout container
 * todo consider named value types (fill, content)
 * todo consider width value types (percent fr em rem etc)
 */
export const width = (width: number) => ({ width });

/**
 * Position
 * if position absolute and relative are set, absolute wins and the values will be added
 * todo sticky?
 */
export const position = (x: number, y: number) => ({ position: "absolute", top: y, left: x });
export const move = (x: number, y: number) => ({ position: "relative", top: y, left: x });
export const moveX = (x: number) => ({ position: "relative", left: x });
export const moveY = (y: number) => ({ position: "relative", top: y });

/**
 * Block
 */
export const p = (padding: number) => ({ padding });
export const px = (paddingX: number) => ({ paddingLeft: paddingX, paddingRight: paddingX });
export const py = (paddingY: number) => ({ paddingTop: paddingY, paddingBottom: paddingY });
export const pt = (paddingTop: number) => ({ paddingTop });
export const pb = (paddingBottom: number) => ({ paddingBottom });
export const pl = (paddingLeft: number) => ({ paddingLeft });
export const pr = (paddingRight: number) => ({ paddingRight });

/**
 * Decoration
 */

// border
// background
// corner
// opacity

/**
 * Text
 */

export const font = (fontFamily: "sans" | "serif" | "mono") => {
  const sans = `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;
  const serif = `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`;
  const mono = `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
  return { sans, serif, mono }[fontFamily];
};

export const fontThin = () => ({ fontWeight: 100 });
export const fontExtralight = () => ({ fontWeight: 200 });
export const fontLight = () => ({ fontWeight: 300 });
export const fontNormal = () => ({ fontWeight: 400 });
export const fontMedium = () => ({ fontWeight: 500 });
export const fontSemibold = () => ({ fontWeight: 600 });
export const fontBold = () => ({ fontWeight: 700 });
export const fontExtrabold = () => ({ fontWeight: 800 });
export const fontBlack = () => ({ fontWeight: 900 });

// font
// weight

/**
 * Visibility
 */

// hide

/**
 * Z index
 */

export const layoutItemFill = () => ({ width: "100%" });
export const layoutItemWidth = (width: number) => ({ width });
