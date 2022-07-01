export const dateFormat = (date) => {
  return new Date(date).toDateString();
};

export const readingTimeFormat = (readingTime) => {
  const readingTimeText =
    readingTime > 1
      ? `${readingTime} minutes read`
      : `${readingTime} minute read`;

  return readingTimeText;
};
