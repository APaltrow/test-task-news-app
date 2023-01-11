import { NUMBER_SUFFIXES } from "../constants/numberSuffixes";

type NumberToOrdinalType = (number: number) => string;

export const numberToOrdinal: NumberToOrdinalType = (number) => {
  const formatter = new Intl.PluralRules("en-US", { type: "ordinal" });

  const suffix = NUMBER_SUFFIXES.get(formatter.select(number));

  return `${number} ${suffix}`;
};
