function range(start, end) {
  if (end < start) {
    return [];
  }
  if (start === end) {
    return [start];
  }
  return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1, arr.length));
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  return base * exponent(base, exp-1);
}

function exponentTwo(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  if (exp % 2 === 0) {
    return Math.pow(exponent(base, exp / 2), 2);
  }
  else {
    return base * Math.pow(exponent(base, (exp-1) / 2), 2);
  }
}
console.log(exponentTwo(2,5));
console.log(range(1, 5));
console.log(sumRec(range(1, 5)));
