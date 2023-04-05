const RandomWord = () => {
  const max = 31;
  const min = 0;
  const arrOfWords = [
    "lemon",
    "table",
    "plane",
    "sugar",
    "bread",
    "chair",
    "clock",
    "knife",
    "spoon",
    "plate",
    "phone",
    "light",
    "house",
    "table",
    "music",
    "socks",
    "pants",
    "shirt",
    "watch",
    "socks",
    "shoes",
    "books",
    "plant",
    "socks",
    "glass",
    "beach",
    "towel",
    "brush",
    "paint",
    "brush",
    "pencil",
    "brush",
    "scarf",
  ];
  return arrOfWords[Math.floor(Math.random() * (max - min) + min)];
};
export default RandomWord;
