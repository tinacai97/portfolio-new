import {
  argbFromHex,
  themeFromSourceColor
} from "@material/material-color-utilities";

const seed = argbFromHex("#2F6C1F"); // your brand / user-picked color
const theme = themeFromSourceColor(seed);


function applyScheme(scheme, prefix = "--md") {
  const root = document.documentElement;

  Object.entries(scheme).forEach(([key, value]) => {
    root.style.setProperty(
      `${prefix}-${key}`,
      `#${value.toString(16).padStart(6, "0")}`
    );
  });
}

// Light mode
applyScheme(theme.schemes.light);

// Dark mode
// applyScheme(theme.schemes.dark);
