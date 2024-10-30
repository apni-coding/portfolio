// function to truncate string with ...
export const truncateString = (text: string, maxLength: number) => {
  if (!text) {
    return text;
  }
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + " ... ";
  }
  return text;
};
