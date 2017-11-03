// Array.prototype.bubbleSort = function () {
//   for (let i = 0; i < this.length - 1; i++) {
//     console.log(this);
//     let i = i;
//     while(this[j] > this[j + 1]) {
//       const temp = this[j];
//       this[j] = this[j + 1];
//       this[j + 1] = temp;
//       j++;
//     }
//   }
//   return this;
// };

Array.prototype.bubbleSort = function () {
  let swapped = true;
  while (swapped) {
    console.log(this);
    swapped = false;
    for (let i = 1; i < this.length; i++) {
      if (this[i - 1] > this[i]) {
        const temp = this[i];
        this[i] = this[i - 1];
        this[i - 1] = temp;
        swapped = true;
      }
    }
  }
  return this;
};

let arr = [5, 3, 8, 6, 4, 9, 1, 2, 7];
console.log(arr.bubbleSort());


String.prototype.subString = function () {
  const result = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i; j < this.length; j++) {
      if (!result.includes(this.slice(i,j+1))) {
        result.push(this.slice(i,j+1));
      }
    }
  }
  return result;
};

console.log("happ".subString());
