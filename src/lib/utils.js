/**
 * Merges class names. Pass string or conditional classes; falsy values are omitted.
 * Used by UI components (e.g. shadcn-style) for conditional styling.
 */
export function cn(...args) {
  return args
    .flat()
    .filter((x) => typeof x === "string" && x.length > 0)
    .join(" ");
}
