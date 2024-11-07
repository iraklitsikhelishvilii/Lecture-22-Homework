// 1. შექმენით რიცხვების მასივი და თითოეული რიცხვისთვის foreach ციკლით დაბეჭდეთ მათი კვადრატი.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach((element) => {
//   console.log(element * element);
// });
// 2. შექმენით ხილის სახელების მასივი და foreach ციკლით დაბეჭდეთ თითოეული ხილის სახელი.
// let fruits = ["ვაშლი", "მსხალი", "საზამთრო", "ატამი"];
// fruits.forEach((Element) => {
//   console.log(Element);
// });
// 3. მასივში არსებული რიცხვების ჯამი გამოიანგარიშეთ foreach ციკლით.
// let numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// numbers.forEach((Element) => {
//   return (sum += Element);
// });
// console.log(sum);

// 4. შექმენით მასივი სტუდენტების სახელებით და foreach ციკლით დაბეჭდეთ, რომელი სტუდენტი რომელ ადგილზეა.
// let students = ["irakli", "andria", "giorgi", "vaxo"];
// students.forEach((Element, i) => {
//   console.log(`${Element} არის ${i} ადგილზე`);
//   //   console.log(students[index]);
// });
// 5. შექმენით მასივი და მასში ჩაწერეთ მთელი რიცხვები. foreach ციკლით მხოლოდ ლუწი რიცხვები დაბეჭდეთ.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// numbers.forEach((Element) => {
//   if (Element % 2 === 0) {
//     console.log(Element);
//   }
// });
// 6. შექმენით რიცხვების მასივი და map მეთოდის საშუალებით მიიღეთ მათი კვადრატების ახალი მასივი.
// let Numbers = [1, 2, 3, 4, 5, 6];
// let DoubleNumbers = Numbers.map((Element) => {
//   return Element * Element;
// });
// console.log(DoubleNumbers);
// 7. მასივში ჩაწერეთ სახელები და map მეთოდის გამოყენებით ყოველი სახელი ყველა ასოს პატარა ასოზე გადააკეთეთ.
// let names = ["Irakli", "Andria", "Niki", "Vaxo"];
// names.map((Element) => {
//   console.log(Element.toLowerCase());
// });

// 8. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, სადაც ყველა რიცხვი 10-ზე გაიზარდა.
// let Numbers = [1, 2, 3, 4, 5, 6, 7];
// let AddNumbers = Numbers.map((Element) => {
//   return Element + 10;
// });
// console.log(AddNumbers);

// 9. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის სტუდენტის სახელი და ქულა. map მეთოდით მიიღეთ ახალი მასივი მხოლოდ სტუდენტების სახელებით.
// let StudentsScores = [
//   { name: "irakli", score: 10 },
//   { name: "andria", score: 10 },
//   { name: "vaxo", score: 10 },
// ];
// let Students = StudentsScores.map((Element) => {
//   return Element.name;
// });
// console.log(Students);

// 10. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, რომელშიც ყველა ლუწი რიცხვი გაორმაგებულია, ხოლო კენტი არ შეცვლილა.
// let Numbers = [1, 2, 3, 4, 5, 6, 7];
// let ChangedNumbers = Numbers.map((Element) => {
//   if (Element % 2 === 0) {
//     return Element * 2;
//   } else {
//     return Element;
//   }
// });
// console.log(ChangedNumbers);

// 11. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ მხოლოდ ლუწი რიცხვების მასივი.
// let Numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let Oddnumbers = Numbers.filter((Element) => {
//   if (Element % 2 === 0) {
//     return Element;
//   }
// });
// console.log(Oddnumbers);

// 12. შექმენით სახელების მასივი და filter მეთოდით მხოლოდ ის სახელები ამოიღეთ, რომლებიც 5-ზე მეტ სიმბოლოს შეიცავს.
// let Names = ["irakli", "andria", "niki", "vaxo"];
// let LongNames = Names.filter((Element) => {
//   if (Element.length > 5) {
//     return Element;
//   }
// });
// console.log(LongNames);

// 13. შექმენით რიცხვების მასივი და filter მეთოდით მხოლოდ დადებითი რიცხვები მიიღეთ.
// let Numbers = [1, -1, 2, -2, 3, -3];
// Numbers.filter((Element) => {
//   if (Element > 0) {
//     console.log(Element);
//   }
// });

// 14. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის პროდუქტების სახელები და ფასები. filter მეთოდით მიიღეთ მხოლოდ ის პროდუქტები, რომელთა ფასი 100-ზე მეტია.
// let ProductPrices = [
//   { Name: "vashli", price: 10 },
//   { Name: "msxali", price: 11 },
//   { Name: "sazamtro", price: 101 },
//   { Name: "ananasi", price: 102 },
// ];
// ProductPrices.filter((Element) => {
//   if (Element.price > 100) {
//     console.log(Element.Name);
//   }
// });
// 15. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ ყველა რიცხვი, რომელიც 50-ს აღემატება.
// let Numbers = [1, 2, 3, 55, 66, 787, 88];
// Numbers.filter((Element) => {
//   if (Element > 50) {
//     console.log(Element);
//   }
// });
// 16. დაწერეთ კოდი, რომელიც while ციკლით 1-დან 10-მდე რიცხვებს დაბეჭდავს.
// let index = 0;
// while (index++ < 10) {
//   console.log(index);
// }
// 17. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში არსებული რიცხვების ჯამს გამოიანგარიშებს.
// let numbers = [1, 2, 3, 4, 5, 6];
// let i = -1;
// while (i++ < numbers.length - 1) {
//   console.log(numbers[i]);
// }
// 18. შექმენით ცვლადი რიცხვით 1 და while ციკლით იმატეთ 2-ით, სანამ რიცხვი არ მიაღწევს 20-ს.
// let Num = 1;
// while ((Num = Num + 2) <= 20) {
//   console.log(Num);
// }

// 19. დაწერეთ პროგრამა, რომელიც while ციკლით რიცხვებს დაბეჭდავს 20-დან 10-მდე დაღმავალი თანმიმდევრობით.
// let Num = 21;
// while (Num-- > 10) {
//   console.log(Num);
// }
// 20. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში ყველა ობიექტს გამოიკვლევს და თითოეული მათგანის სახელს დაბეჭდავს.
// let Products = [
//   { Name: "vashli", price: 10 },
//   { Name: "msxali", price: 11 },
//   { Name: "sazamtro", price: 101 },
//   { Name: "ananasi", price: 102 },
// ];
// let i = -1;
// while (i++ < Products.length - 1) {
//   console.log(Products[i].Name);
// }
