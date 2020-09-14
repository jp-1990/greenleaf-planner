// capitalise first letter of each word
export const capitaliseFirstLetters = (string) => {
  const words = string.split(' ').map((el) => {
    return `${el[0].toUpperCase()}${el.substring(1, el.length)}`;
  });
  return words.join(' ');
};
