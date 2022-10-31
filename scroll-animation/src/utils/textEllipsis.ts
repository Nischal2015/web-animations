export const textEllipsis = (text: string) => {
  if (text.length > 148) {
    const newText = text.slice(0, 148);
    return `${newText} ...`;
  }
  return text;
};
