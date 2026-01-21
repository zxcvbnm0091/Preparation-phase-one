/**
 * ////////////////
 * changeXRecursive
 * ////////////////
 * Function ini harus dikerjakan dengan menggunakan rekursif.
 * Function ini menerima dua parameter, yaitu:
 *  1. data yang merupakan string dari number
 *  2. jenis yang merupakan string berisi antara ganjil dan genap
 *
 * [EXAMPLE]
 * Input: data = 012345678922468 dan jenis = ganjil
 * Process: Karena jenisnya ganjil maka setiap bilangan genap diubah menjadi x
 * Output: x1x3x5x7x9xxxxx
 *
 * [RULES]
 * 1. Dilarang mengubah tipe parameter function
 * 2. Dilarang membuat function diluar function yang disediakan
 * 5. Wajib menggunakan rekursif
 */

function changeXRecursive(data, jenis) {
  //code here
  if (data.length === 0) return "";
  if (jenis !== "ganjil" && jenis !== "genap") return data;

  let str = "";
  if (
    (jenis === "ganjil" && data[0] % 2 === 0) || // CHECK IF JENIS IS GANJIL AND NUMBER IS EVEN
    (jenis === "genap" && data[0] % 2 !== 0) // OR IF JENIS IS GENAP AND NUMBER IS ODD
  ) {
    str = "x"; //CONVERT TO X
  } else {
    str = data[0]; // ELSE KEEP
  }

  // let str =
  //   jenis === "ganjil" // CHECK IF JENIS IS 'GANJIL'
  //     ? data[0] % 2 === 0 // IF YES CHECK IF FIRST NUMBER IS EVEN
  //       ? "x" // IF YES CONVERT TO X
  //       : data[0] //IF NO KEEP
  //     : data[0] % 2 !== 0 // IF JENIS IS 'GENAP' AND FIRST NUMBER IS ODD
  //       ? "x" // IF YES CONVERT TO X
  //       : data[0]; // IF NO KEEP

  return str + changeXRecursive(data.slice(1), jenis);
}

console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x
