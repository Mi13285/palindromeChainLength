const palindromeChainLength = function (n) {
  let p = parseInt(("" + n).split("").join(""));
  if (n != p) {
    return 1 + palindromeChainLength(n + p);
  }
  return 0;
};
console.log(palindromeChainLength(1));
