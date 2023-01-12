import { FORMATTER } from "../constants/numberFormatter";
import { NUMBER_SUFFIXES } from "../constants/numberSuffixes";

type NumberToOrdinalType = (number: number) => string;

export const numberToOrdinal: NumberToOrdinalType = (number) => {
  const suffix = NUMBER_SUFFIXES.get(FORMATTER.select(number));

  return `${number + (suffix || "")}`;
};
