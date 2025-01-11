function chooseyEndings(word, suffix) {
  let array = [];
  let len = suffix.length;
  let typ = typeof word;
  if (typeof word !== "object") {
    return [];
  } else {
    for (let i of word) {
      let s = i.slice(-len);
      if (s === suffix) {
        array.push(i);
      }
    }
  }
  return array;
}
