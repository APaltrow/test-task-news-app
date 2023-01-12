import { FC } from "react";

interface ITextHighlighter {
  textToSearch: string;
  text: string;
}

export const TextHighlighter: FC<ITextHighlighter> = ({
  textToSearch,
  text,
}) => {
  const isHighlighted = text.split(new RegExp(`(${textToSearch})`, "gi"));

  return (
    <span>
      {isHighlighted.map((part) =>
        part.toLowerCase() === textToSearch.toLowerCase() ? (
          <mark>{part}</mark>
        ) : (
          part
        )
      )}
    </span>
  );
};
