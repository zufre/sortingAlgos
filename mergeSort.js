function mergeSort(arr) {
if (arr.length === 1){
  return arr;
}
  const center = Math.floor(arr.length / 2);
  const left =  arr.slice(0, center);
  const right = arr.slice(center);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results =[];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    }else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

mergeSort([5, 37, 8, 6, 44, 77, 36, 544, 31]);


