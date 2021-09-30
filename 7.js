let countEven = 0;
let countOdd = 0;
let countZero = 0;
for (i = 0; i < arr.length; i++){
    if (arr[i] == 0) {
      countZero += 1;
      }
  else if (!(arr[i] % 2)) {
      countEven += 1;
      }
  else {
    countOdd += 1;
  }
}