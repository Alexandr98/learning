export function evenNum(i, a) {
  for (i = 0; i < a; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
evenNum(0, 10);
