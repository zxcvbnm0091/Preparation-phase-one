/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/
function quickSort(array) {
  // code di sini

  // Quick Sort
  let pivot = array[Math.floor(array.length / 2)];
  let middleGroup = [];
  let left = [];
  let right = [];

  if (array.length <= 1) return array;

  for (const tiket of array) {
    if (tiket.totalCost === pivot.totalCost) middleGroup.push(tiket);
    else if (tiket.totalCost > pivot.totalCost) right.push(tiket);
    else left.push(tiket);
  }

  array = [...quickSort(right), ...middleGroup, ...quickSort(left)];
  return array;
}

function travelingIndonesia(arr, emoney) {
  //code here
  let result = [];
  const cities = { Yogyakarta: 0, Semarang: 1, Surabaya: 2, Denpasar: 3 };
  const ticketPrice = {
    Pesawat: 275000,
    Kereta: 250000,
    Bis: 225000,
  };
  const discount = { OVO: 0.15, Dana: 0.1, Gopay: 0.05, Cash: 1 };

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let temp = "";
    let parts = [];

    for (let j = 0; j <= str.length; j++) {
      if (str[j] === "-" || j === str.length) {
        parts.push(temp);
        temp = "";
      } else {
        temp += str[j];
      }
    }

    let [name, deptCity, destCity, vehicle] = parts;

    const distance = Math.abs(cities[destCity] - cities[deptCity]);
    const price = ticketPrice[vehicle] * distance;
    const discountedPrice = price - price * discount[emoney];

    let tiket = {
      name: name,
      departureCity: deptCity,
      destinationCity: destCity,
      transport: vehicle,
      totalCost: discountedPrice,
    };

    result.push(tiket);
  }

  if (result.length <= 1) return result;

  // const max = result.reduce((acc, curr) =>
  //   acc && acc.totalCost > curr.totalCost ? acc : curr,
  // );
  // return max;

  return quickSort(result);
}

console.log(
  travelingIndonesia(
    [
      "Danang-Yogyakarta-Semarang-Bis",
      "Alif-Denpasar-Surabaya-Kereta",
      "Bahari-Semarang-Denpasar-Pesawat",
    ],
    "OVO",
  ),
);
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log(
  "==================================================================================================",
);
console.log(
  travelingIndonesia(
    [
      "Shafur-Surabaya-Yogyakarta-Kereta",
      "Taufik-Semarang-Surabaya-Pesawat",
      "Alex-Yogyakarta-Semarang-Kereta",
    ],
    "Dana",
  ),
);
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log(
  "==================================================================================================",
);
console.log(
  travelingIndonesia(
    ["Andika-Denpasar-Surabaya-Bis", "Katy-Surabaya-Denpasar-Pesawat"],
    "Gopay",
  ),
);
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log(
  "==================================================================================================",
);
console.log(travelingIndonesia(["Putra-Denpasar-Yogyakarta-Pesawat"], "Cash"));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], "Cash")); // [];
