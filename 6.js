let result = true;
for (i = 0; i < arr.length; i++){
  for (j = i+1; j< arr.length; j++){
    if (arr[i] !== arr[j]) {
      result = false}
  }
}