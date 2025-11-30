const IconValues = ["twitter", "email", "instagram"] as const;

const IconValuesObj = IconValues.reduce(
  // biome-ignore lint/performance/noAccumulatingSpread: smd
  (acc, next) => ({ ...acc, [next]: null }),
  {} as Record<string, null>
);
export type Icons = (typeof IconValues)[number];
export function isIcon(value: string): value is Icons {
  return value in IconValuesObj;
}
