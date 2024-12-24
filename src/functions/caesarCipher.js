function caesarCipher(string, shAmt) {
  let newString = "";
  for (let char of string) {
    const charValue = char.charCodeAt(0);
    newString += String.fromCharCode(charValue + shAmt);
  }
  return newString;
}

module.exports = caesarCipher;
