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

function fibonacci(n) {
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function bsearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  return bsearchRecursive(start, end, arr, target);
}

function bsearchRecursive(start, end, arr, target) {
  console.log(arr.slice(start, end + 1));
  if (end < start) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  console.log(mid);
  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] < target) {
    return bsearchRecursive(mid + 1, end, arr, target);
  } else {
    return bsearchRecursive(start, mid - 1, arr, target);
  }
}

function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let center = Math.floor(arr.length / 2);
  let first = arr.slice(0, center);
  let second = arr.slice(center, arr.length);

  return merge(mergesort(first), mergesort(second));
}

function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
  if (left[0] < right[0]) {
    result.push(left.shift());
  } else {
    result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}
console.log(mergesort([1,4,5,2,6,7,3,8]));
console.log(fibonacci(8));
console.log(exponentTwo(2,5));
console.log(range(1, 5));
console.log(sumRec(range(1, 5)));
console.log(bsearch([1, 3, 4, 5, 8, 10, 11, 14, 20, 24], 20));
