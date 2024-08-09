// FUTURE: Localize and put in env
export const NUMBER_FORMATTER = new Intl.NumberFormat("en-PH", {
  style: "decimal",
});

export function formatAppend(value: number, append: string) {
  const formatted = NUMBER_FORMATTER.format(value);
  return `${formatted} ${append}`;
}
