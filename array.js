// 1.Prompt vasitesile daxil olunmush ededin faktorialini tapin. Numune : 3 daxil olarsa,1*2*3 cavab 6 qaytarsin.

// let eded=parseInt(prompt("Eded daxil edin:"))
// let faktorial=1;
// for (let i = 1; i <= eded; i++) {
//     faktorial *= i
// }
// console.log(faktorial)




//2.Verilmish arrayde en boyuk ededle,en kicik ededin yerini deyishen alqoritm yazin. Let arr = [2,4,6,7,10,12,58,9] bu araydəyi ən böyük ədəd 58 və ən kicik ədəd 2 yerlərin dəyişiblər. Let newArr=[58,4,6,7,10,12,2,9] Bele olsun.

// let arr = [39, 4, 0, 7, 60, 12, 98, 3];
// let enBoyuk = arr[0];  
// let enKicik = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > enBoyuk) {
//     enBoyuk = arr[i];
//   } else if (arr[i] < enKicik) {
//     enKicik = arr[i];
//   }
// }

// let enBoyukIndex = arr.indexOf(enBoyuk);
// let enKicikIndex = arr.indexOf(enKicik);

// [arr[enBoyukIndex], arr[enKicikIndex]] = [enKicik, enBoyuk];
// console.log(arr);


// 3.Verilmiş Arraydə tək elementlerden ən böyüyünü tapan alqoritm yazin.
// let arr = [39, 4, 0, 7, 73, 12, 98, 3];
// let enBoyuk=0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] %2==1) {
//         if (arr[i] > enBoyuk) {
//             enBoyuk = arr[i];
//     }
    
// }
// }
// console.log(enBoyuk);

//4. Bir ölçülü massivin minimum və maksimum elementlərinin ədədi ortasını tapan proqram tərtib edin.

// let arr = [ 4, 38, 9, 10, 45, 58, 1];
// let min = arr[0];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     } else if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// let ortalama = (min + max) / 2;
// console.log( ortalama);

//5.arrayin elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapan function
let arr = [25, 1, 100, 50];
let enBoyuk = arr[0];
let enKicik = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > enBoyuk) {
    enBoyuk = arr[i];
  } else if (arr[i] < enKicik) {
    enKicik = arr[i];
  }
}
console.log(enBoyuk)
console.log(enKicik)

let arrSum =0
for (let index = 0; index < arr.length; index++) {
    arrSum+= arr[index]
    
}

let total = arrSum - (enBoyuk + enKicik)
console.log(arrSum)
console.log(total)
