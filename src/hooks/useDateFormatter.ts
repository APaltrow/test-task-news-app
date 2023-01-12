import { numberToOrdinal } from "../utils/numberToOrdinal";

interface IFormattedDate {
  formattedDate: string;
}
type DateFormatterType = (date: string) => IFormattedDate;

export const useDateFormatter: DateFormatterType = (date) => {
  const day = new Date(date).getDate();
  const month = new Date(date).toLocaleString("en-US", { month: "long" });
  const year = new Date(date).getFullYear();

  const formatterDay = numberToOrdinal(day);
  const formattedDate = `${month} ${formatterDay}, ${year}`;

  return {
    formattedDate,
  };
};
