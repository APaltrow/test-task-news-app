import { FC } from "react";
import { wordsChecker } from "../../utils/wordsCheker";

interface ITextHighlighter {
  textToSearch: string;
  text: string;
}

export const TextHighlighter: FC<ITextHighlighter> = ({
  textToSearch,
  text,
}) => {
  const pattern = wordsChecker(textToSearch);
  const isHighlighted = text.split(pattern);

  return (
    <span>
      {isHighlighted.map((part, idx) =>
        pattern.test(part.toLowerCase()) ? <mark key={idx}>{part}</mark> : part
      )}
    </span>
  );
};
