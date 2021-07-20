function capitalized(str) {
  const arr = str.split("");
  arr[0]=arr[0].toUpperCase();
  const newWord = arr.join("");
  return newWord;
}
module.exports = capitalized;
