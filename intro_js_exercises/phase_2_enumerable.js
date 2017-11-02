Array.prototype.myEach = function(anything) {
    for(let i = 0; i<this.length; i++) {
      anything(this[i], i, this);
    }
};

let arr = [1, 2, 3];
// arr.myEach(function(el, idx, x, y) {
//   console.log(`idx is ${idx}`);
//   console.log(`el is ${el}`);
// });

Array.prototype.myMap = function(callback) {
  let result = [];
  this.myEach(function(el) {
    result.push(callback(el));
  });
  return result;
};

Array.prototype.myMap2 = function(callback) {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

function double(num) {
  return 2 * num;
}

console.log("double of arr is:");
console.log(arr.myMap(double));


Array.prototype.myReduce = function(callback, ival) {
  let acc;
  let i;
  if(!ival) {
    acc = this[0];
    i = 1;
  }
  else {
    acc = ival;
    i = 0;
  }
  for(let j = i; j < this.length; j++) {
    acc = callback(acc, this[j], j, this);
  }
  return acc;
};


function sum(a,b) {
  return a + b;
}

console.log([1,2,3].myReduce(a => a));
