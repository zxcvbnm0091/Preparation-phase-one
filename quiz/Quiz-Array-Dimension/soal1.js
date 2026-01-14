/*
=================================================
SOAL 1
DOUBLE REVERSE ARRAY
=================================================

INSTRUCTION:
Terdapat function doubleReverse yang menerima parameter berupa array of string.
Function ini akan memutar elemen array, dan string di dalam elemen array
juga akan dibalik jika panjang string GENAP.

EXAMPLE:
input  : ['rabu', 'cinta', 'benci', 'masuk', 'nikmat']
proses : memutar isi array, dan memutar elemen array yang panjang katanya genap
output : ['tamkin', 'masuk', 'benci', 'cinta', 'ubar']

RULES:
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
- DILARANG menggunakan .reverse()
*/

function doubleReverse(arr) {
  // code here
  if (arr.length < 1) return [];
  let reversedArr = [];
  // REVESE ARRAY
  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i];

    //IF STRING LENGTH IS EVEN REVESE STRING
    if (current.length % 2 === 0) {
      let revsWord = "";
      for (let j = current.length - 1; j >= 0; j--) {
        revsWord += current[j];
      }
      current = revsWord;
    }
    reversedArr.push(current);
  }
  return reversedArr;
}

console.log(doubleReverse(["rabu", "cinta", "benci", "masuk", "nikmat"]));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]

console.log(doubleReverse(["aku", "sayang", "kamu"]));
// [ 'umak', 'gnayas', 'aku' ]

console.log(doubleReverse(["pelakor", "perusak", "rumah", "tangga"]));
// [ 'anggnat', 'rumah', 'perusak', 'pelakor' ]

console.log(doubleReverse([]));
// invalid input parameter
