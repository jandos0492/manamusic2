function removeUrlAnchor(url) {
  if (url.includes("#")) {
    let arr = Array.from(url);
    let idx = arr.findIndex((elem) => elem === "#");
    return url.slice(0, idx);
  } else {
    return url;
  }
}

console.log(removeUrlAnchor('www.codewars.com#about'))