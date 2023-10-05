/* 1. დაწერეთ პროგრამა რომელიც შეეკითხება მომხმარებელს თავის ასაკს და გამოაკონსოლებს შესაბამის კატეგორიას
თუ 0-ზე ნაკლებია -> "Invalid age"
0-სა და 12-ს შორის -> "Child"
13-სა და 19-ს შორის -> "Teenager"
20-სა და 64-ს შორის -> "Adult"
65 ან მეტი -> "Senior"

*/

// let age = Number(prompt("Enter your age"));

// if (age < 0) {
//   console.log("Invalid age");
// } else if (age >= 0 && age <= 12) {
//   console.log("Child");
// } else if (age >= 13 && age <= 19) {
//   console.log("Teenager");
// } else if (age >= 20 && age <= 64) {
//   console.log("Adult");
// } else if (age >= 65) {
//   console.log("Senior");
// } else {
//   console.log("Invalid input");
// }

/* 2. დაწერეთ პროგრამა, რომელიც გამოითვლის ტემპერატურას ფარენჰეიტსა და ცელსიუსში
- შეეკითხეთ მომხმარებელს გადაყვანის მიმართულებისთვის (1 ნიშნავს ფარენჰეიტიდან ცელსიუსში, ხოლო 2-ცელსიუსიდან ფარენფეიტში)
- სთხოვეთ მომხმარებელს ტემპერატურის შეყვანა

- თუ იუზერმა აირჩია 1, ფარენჰეიტიდან ცელსიუსში გადასაყვანად გამოიყენეთ ფორმულა: (F - 32) 5/9
- თუ იუზერმა აირჩია 2, ცელსიუსიდან ფარენჰეიტში გადასაყვანად გამოიყენეთ ფორმულა: (C * 9/5) + 32

მაგალითად:
- თუ იუზერმა შეიყვანა 1 და 68, პროგრამამ უნდა გამოაკონსოლოს -> "68F is 20C"
- თუ იუზერმა შეიყვანა 2 და 20, პროგრამამ უნდა გამოაკონსოლოს -> "20C is 68F"
*/

// let conversionDirection = Number(prompt("Choose the conversion direction"));
// let temperature = Number(prompt("Enter the temperature value: "));

// if (conversionDirection === 1) {
//   const celsius = (temperature - 32) * (5 / 9);
//   console.log(`${temperature}°F is ${celsius.toFixed(2)}°C.`);
// } else if (conversionDirection === 2) {
//   const fahrenheit = temperature * (9 / 5) + 32;
//   console.log(`${temperature}°C is ${fahrenheit.toFixed(2)}°F.`);
// } else {
//   console.log("Invalid conversion direction. Please choose 1 or 2.");
// }

// 3. დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.

// let monthNumber = Number(prompt("Enter month number: "));

// switch (monthNumber) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log(31);
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log(30);
//     break;
//   case 2:
//     console.log("28 or 29");
//     break;
//   default:
//     console.log("Wrong Input");
// }

// switch (monthNumber) {
//   case 1:
//     console.log(31);
//     break;
//   case 2:
//     console.log("28 or 29");
//     break;
//   case 3:
//     console.log(31);
//     break;
//   case 4:
//     console.log(30);
//     break;
//   case 5:
//     console.log(31);
//     break;
//   case 6:
//     console.log(30);
//     break;
//   case 7:
//     console.log(31);
//     break;
//   case 8:
//     console.log(31);
//     break;
//   case 9:
//     console.log(30);
//     break;
//   case 10:
//     console.log(31);
//     break;
//   case 11:
//     console.log(30);
//     break;
//   case 12:
//     console.log(31);
//     break;
//   default:
//     console.log("Wrong Input");
// }

// if (monthNumber === 1) {
//   console.log(31);
// } else if (monthNumber === 2) {
//   console.log("28 or 29");
// } else if (monthNumber === 3) {
//   console.log(31);
// } else if (monthNumber === 4) {
//   console.log(30);
// } else if (mongthNumber === 5) {
//   console.log(31);
// } else if (monthNumber === 6) {
//   console.log(30);
// } else if (monthNumber === 7) {
//   console.log(31);
// } else if (monthNumber === 8) {
//   console.log(31);
// } else if (monthNumber === 9) {
//   console.log(30);
// } else if (monthNumber === 10) {
//   console.log(31);
// } else if (monthNumber === 11) {
//   console.log(30);
// } else if (monthNumber === 12) {
//   console.log(31);
// } else {
//   console.log("Wrong Input");
// }

// if (
//   monthNumber === 1 ||
//   monthNumber === 3 ||
//   monthNumber === 5 ||
//   monthNumber === 7 ||
//   monthNumber === 8 ||
//   monthNumber === 10 ||
//   monthNumber === 12
// ) {
//   console.log(31);
// } else if (
//   monthNumber === 4 ||
//   monthNumber === 6 ||
//   monthNumber === 9 ||
//   monthNumber === 11
// ) {
//   console.log(30);
// } else if (monthNumber === 2) {
//   console.log("28 or 29");
// } else {
//   console.log("Wrong input");
// }
