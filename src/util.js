const mapObj = {
  "&#039;": "'",
  "&quot;": '"',
  "&ldquo;": '"',
  "&rdquo;": '"',
  "&epsilon;": "ε",
  "&ocirc;": "ô",
  "&Phi;": "Φ",
};

const formatText = (text) => {
    let re = new RegExp(Object.keys(mapObj).join("|"), "gi");
    text = text.replace(re, function (matched) {
      return mapObj[matched];
    });
    return text;
}

export { formatText, }