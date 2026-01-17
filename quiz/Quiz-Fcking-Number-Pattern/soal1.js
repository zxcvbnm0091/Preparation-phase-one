/*
================
MISSING NUMBER
================
description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
  //code here
  // FILTER ARRAY WITH NUMBER ONLY
  let nums = arr.flat().filter((num) => Number.isInteger(num));

  let minNum = Infinity;
  let maxNum = 0;

  let myObj = {};
  // STORE PRESENCE NUMBER TO OBJECT
  for (const num of nums) {
    myObj[num] = true;

    // DETERMINE THE MAX AND MIN NUMBER
    if (num > maxNum) maxNum = num;
    if (num < minNum) minNum = num;
  }

  let missingNums = [];
  // CHECK NUMBER IN RANGE OF MIN AND MAX NUMBER
  // IF NUMBER NOT EXIST IN OBJECT
  // ADD NUMBER TO MISSING ARRAY
  for (let i = minNum; i <= maxNum; i++) {
    if (!myObj[i]) missingNums.push(i);
  }

  return missingNums;
}

console.log(
  missingNum([
    [3, " ", 5],
    [1, " ", 7],
    [9, " ", " "],
  ])
); // [ 2, 4, 6, 8 ]
console.log(
  missingNum([
    [2, " "],
    [" ", 5],
  ])
); // [ 3, 4 ]
console.log(
  missingNum([
    [11, " ", 13],
    [17, " ", 19],
    [" ", 16, " "],
  ])
); // [ 12, 14, 15, 18 ]
console.log(
  missingNum([
    [3, " ", 5, 15],
    [1, " ", 7, 13],
    [9, " ", " ", 12],
    [" ", 16, " ", " "],
  ])
); // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])); // []
