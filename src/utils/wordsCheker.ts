export const wordsChecker = (word: string) => {
  const phrase = word.includes(" ") ? word.trim().split(" ").join("|") : word;
  const pattern = new RegExp(`(${phrase})`, "gi");

  return pattern;
};
