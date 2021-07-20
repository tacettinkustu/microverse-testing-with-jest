function stringLength(str) {
  const length = str.split("").length;
  if (0 < length && length < 11) {
    return length;
  } else {
    throw 'Length error';
  }
}
module.exports = stringLength;
