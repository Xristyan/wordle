const RandomWord = () => {
  const arrOfWords = ["LEMON", "PLANE", "TABLE"];
  return arrOfWords[Math.floor(Math.random() * (3 - 0) + 0)];
};
export default RandomWord;
