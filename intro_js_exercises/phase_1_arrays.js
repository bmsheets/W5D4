Array.prototype.uniq = function() {
  const result = [];
  this.forEach(function(el) {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
};

// var arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(2);
// arr.push(2);
// arr.push(3);
//
// console.log(arr);
// arr = arr.uniq(); //arr should be [1, 2, 3]
// console.log(arr);
Array.prototype.twoSum = function() {
  const result = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i,j]);
      }
    }
  }
  return result;
};

// var arr = [1,2,2,-1,0,3];
// console.log(arr);
// arr = arr.twoSum();
// console.log(arr);

Array.prototype.transpose = function() {
  const result = [];
  for(let row = 0; row < this[0].length; row++) {
    result.push([]);
    for(let col = 0; col < this.length; col++) {
      result[row].push(this[col][row]);
    }
  }
  return result;
};

var arr = [[1, 2, 3], [4, 5, 6]];
console.log(arr);
arr = arr.transpose();
console.log(arr);
