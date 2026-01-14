/*
=================================================
SOAL 3
Minimum Distance Between Greatest Element
=================================================

INSTRUCTION:
Diberikan sebuah function minDistanceBetweenGreatest yang menerima array of number.
Array tersebut memiliki nilai terbesar yang bisa muncul lebih dari satu kali.
Tentukan jarak minimum antara kemunculan nilai terbesar.

Contoh 1:
Input  : [3, 5, 2, 3, 5, 3, 5]
Output : 2

Nilai terbesar adalah 5 dengan indeks: 1, 4, 6
- jarak indeks 1 ke 4 = 3
- jarak indeks 4 ke 6 = 2
Minimum jarak = 2

Contoh 2:
Input  : [1, 1, 1, 1, 1, 1]
Output : 1

RULES:
- DILARANG menggunakan .map, .filter, dan .reduce
*/

function minDistanceBetweenGreatest(arr) {
  // code here
  let maxNum = Math.max(...arr, 0);
  let idxMax = [];

  // get all index of maxNum
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === maxNum) {
      idxMax.push(i);
    }
  }

  //if only one maxNum return 0
  if (idxMax.length <= 1) return 0;

  //find the shortest distance between maxNums
  let minDist = Infinity;
  for (let j = 0; j < idxMax.length - 1; j++) {
    let dist = idxMax[j + 1] - idxMax[j];
    if (dist < minDist) {
      minDist = dist;
    }
  }

  return minDist;
}

console.log(minDistanceBetweenGreatest([3, 5, 2, 3, 5, 3, 5]));
// 2

console.log(minDistanceBetweenGreatest([1, 1, 1, 1, 1, 1]));
// 1

console.log(minDistanceBetweenGreatest([7, 8, 5, 2, 1, 1]));
// 0
