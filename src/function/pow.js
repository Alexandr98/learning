export function pow(x, n) {
  let res = x;
  if (isNan(x)) {
    alert("NaN");
  } else {
    for (let i = 1; i < n; i++) {
      res = res * x;
    }
    return res;
  }
}
pow(2, 4);
