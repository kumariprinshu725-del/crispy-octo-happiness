


// 1 . Number

// let num1 = 5;
// let num2 = 10;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);


// 2. Marks

// let a = 10;
// let b = 20;


// console.log(a = 20, b = 10);


// 3 . marks

// let english = 80;
// let hindi = 20
// let maths = 72;

// let totalMarks = english+hindi+maths;

// console.log("Total marks:",totalMarks);
// console.log("Average marks:",totalMarks/ 3);
// console.log("Percentage:",totalMarks/3);


// Ques 4

// let productPrice = 250;
// let quantity = 2;
// let originalBill = productPrice * quantity;

// console.log("Original price:",originalBill);
// console.log("Discount amount:");
// console.log("Final bill:");




// Ques 5

// let length = 10;
// let width = 20;

// console.log(length * width);
// console.log((length + width) / 2);



// ques 6


// let a = 3;
// let even = true;
// let odd= false
// let check= a%2===0;
// console.log(check);



// ques 7

//  let a = 0;

//  let pos = a>0;
//  console.log("This is positive number:",pos);
 
//  let neg = a<0 ;
//  console.log("This is negative number:",neg);

//  let zero = a===0;
//  console.log("This is zero:",zero);
 




// ques 8


// let a = 15;
// let b = 12;

// console.log("a is greater than b:",a > b);
// console.log("b is greater than a:",a < b);
// console.log("both are equal:",a === b);



// Ques 9


// let a = 150;
// let b = 150;
// let c = 150;


// if(a>b>c){
//     console.log("a is largest number ");
// }else if(b>c>a){
//     console.log("b is largest number ");
// }else if(c>a>b){
//     console.log("c is largest number ");
// }else if(a===b===c){
// console.log("All are equal");
// }



// Ques 10

// const age = 10;
// if (age >= 18) {
//      console.log("Eligible to vote");
// } else {
//      console.log("Not eligible to vote");
// }

// Ques 11

// const age = 16;
// const hasLicense = true;

// const canDrive = age >= 18 && hasLicense === true;
// console.log(canDrive);

// Ques 12

const num = 20

console.log("Number is between 10 and 100:",num <= 100 && num >= 10);



// Ques 13

// let studentMarks = 140;

// if (studentMarks >= 90 && studentMarks <= 100) {
//      console.log("A-grade");
// } else if (studentMarks >= 80 && studentMarks <= 89) {
//      console.log("B-grade");
// } else if (studentMarks >= 70 && studentMarks <= 79) {
//      console.log("c-grade");
// } else if (studentMarks >= 60 && studentMarks <= 69) {
//      console.log("D-grade");
// } else if (studentMarks >= 40 && studentMarks <= 59) {
//      console.log("E-grade");
// }
// else if (studentMarks < 40) {
//      console.log("F-grade");
// } else {
//      console.log("invalid number !");
// }



// Ques 14


// const eng = 70;
// const hin = 50;
// const sci = 10;

// const subject = eng + hin + sci;

// if (eng < 40 || hin < 40 || sci < 40) {
//      console.log("Fail");
// }
// if (subject >= 40) {
//      if (subject / 3 >= 75) {
//           console.log("Distinction");

//      } else if (subject / 3 >= 60) {
//           console.log("First Division");

//      } else if (subject / 3 >= 50) {
//           console.log("Second Division");

//      }
// }

// else {
//      console.log("Pass");
// }


// Ques 15


// let unit = 500;
// let finalBill;

// if (unit <= 100) {
//      finalBill = unit * 5;
//      console.log("Final Bill Rs", bill);
// } else if (unit <= 200)
//      finalBill = (100 * 5) + ((unit - 100) * 7);
// else {
//      finalBill = (100 * 5) + (100 * 7) + ((unit - 200) * 10);
// }
// console.log("Final bill Rs", finalBill);



// Ques 16


// let username = "admin";
// let password = "1234";

// if (username === "admin" && password === "1234") {
//      console.log("Login successful");

// } else (
//      console.log("Invalid username or password")
// )



// Ques 17


// let salary = 5000;
// let experience = 1;
// let bonuspercent;


// if (experience >= 10) {
//      bonuspercent = 20;

// } else if (experience >= 5) {
//      bonuspercent = 10;

// } else if (experience >= 2) {
//      bonuspercent = 5;

// } else {
//      bonuspercent = 0;

// }

// let bonus = salary * bonuspercent / 100;
// let finalSalary = salary + bonus

// console.log("Original salary", salary);
// console.log("Bonus", bonus);
// console.log("Final salary", finalSalary);



// Ques 18

//let age = 20;

// if (age >= 0 && age <= 12) {
//      console.log("Child");
// } else if (age >= 13 && age <= 19) {
//      console.log("Teenager");
// } else if (age >= 20 && age <= 59) {
//      console.log("Adult");
// } else if (age >= 60)
//      console.log("Senior Citizen");
// else {
//      console.log("invalid negative age");
// }



// Ques 19


// const day = "sat";

// switch (day) {
//      case "mon":
//           console.log("1st day of the week");
//           break;
//      case "tue":
//           console.log("2nd day of the week");
//           break;
//      case "wed":
//           console.log("3rd day of the week");
//           break;
//      case "thu":
//           console.log("4th day of the week");
//           break;
//      case "fri":
//           console.log("5th day of the week");
//           break;
//      case "sat":
//           console.log("6th day of the week");
//           break;
//      case "sun":
//           console.log("7th day of the week");
//           break;
//      default:
//           console.log("wrong day");

// }



// Ques 20


// let num1 = 5;
// let num2 = 10;
// let operator = "+";

// switch (operator) {
//      case "+":
//           console.log(num1 + num2);
//           break;
//      case "-":
//           console.log(num1 - num2);
//           break;
//      case "*":
//           console.log(num1 * num2);
//           break;
//      case "/":
//           if (num2 === 0) {
//                console.log("Can't didvide by zero");
//           } else {
//                console.log(num1 / num2);
//           }

//           break;
//      case "%":
//           if (num2 === 0) {
//                console.log("Can't didvide by zero");
//           } else {
//                console.log(num1 % num2);
//           }

//           break;
//      default:
//           console.log("invalid operator");

// }


// Ques 21


// let monthNo = "12";

// switch (monthNo) {
//      case "1":
//           console.log("January");
//           break;
//      case "2":
//           console.log("February");
//           break;
//      case "3":
//           console.log("March");
//           break;
//      case "4":
//           console.log("April");
//           break;
//      case "5":
//           console.log("May");
//           break;
//      case "6":
//           console.log("June");
//           break;
//      case "7":
//           console.log("July");
//           break;
//      case "8":
//           console.log("August");
//           break;
//      case "9":
//           console.log("September");
//           break;
//      case "10":
//           console.log("October");
//           break;
//      case "11":
//           console.log("November");
//           break;
//      case "12":
//           console.log("December");
//           break;

//      default: {
//           console.log("Invaild");
//      }
// }



// Ques 22

// let choice = "4";
// let num1 = 2;
// let num2 = 5;

// switch (choice) {
//      case "1":
//           console.log("Addition:", num1 + num2);
//           break;
//      case "2":
//           console.log("Subtraction:", num1 - num2);
//           break;
//      case "3":
//           console.log("Multiplication:", num1 * num2);
//           break;
//      case "4":
//           console.log("Division:", num1 / num2);
//           break;
//      case "5":
//           console.log("Modulus:", num1 % num2);
//           break;
//      default: {
//           console.log("Invalid choice");
//      }
// }



// Ques 23

// let signal = "Yellow";

// switch (signal) {
//      case "Red":
//           console.log("Signal:Stop");
//           break;
//      case "Yellow":
//           console.log("Signal:Wait");
//           break;
//      case "Green":
//           console.log("Signal:Go");
//           break;
//      default: {
//           console.log("Invaild signal");
//      }
// }



// Ques 24

// let balance = 15000;
// let withdrawAmount = 4000;
// let remaining_balance = balance - withdrawAmount;


// if (withdrawAmount > 0) {
//      if (withdrawAmount < balance) {
//           console.log("Withdraw successful");
//           console.log("Remaining balance:", remaining_balance);
//      } else {
//           console.log("Insufficient balance !");
//      }
// } else {
//      console.log("Error !");
// }

// let Widthdraw = withdrawAmount;
// console.log("Widthdraw Amount:", Widthdraw);



// Ques 25


// let age = 11;
// let numberOfTickets = 2;
// let ticketPrice;

// if (age < 12) {
//      ticketPrice = numberOfTickets * 100;

// } else if (age <= 59) {
//      ticketPrice = numberOfTickets * 200;

// } else if (age > 60) {
//      ticketPrice = numberOfTickets * 120;

// }

// console.log("Total Price:", ticketPrice);



// Ques 26


// let choice = "Burger";
// let quantity = 6;

// switch (choice) {
//      case "Burger":
//           console.log("Burger");
//           console.log("Total(rs)", quantity * 150);
//           break;
//      case "Pizza":
//           console.log("Pizza");
//           console.log("Total(rs)", quantity * 250);
//           break;
//      case "Pasta":
//           console.log("Pasta");
//           console.log("Total(rs)", quantity * 180);
//           break;
//      case "Sandwich":
//           console.log("Sandwich");
//           console.log("Total(rs)", quantity * 120);
//           break;
//      default: {
//           console.log("This item is not available");
//      }

// }



// Ques 27

// let unit = 1000;
// let finalBill;

// if (unit <= 100) {
//      finalBill = unit * 5;

// } else if (unit <= 200)
//      finalBill = unit * 7;

// else if (finalBill >= 2000) 
//      finalBill = (unit * 10) * 10 / 100;


// else {
//      finalBill = unit * 10;
// }
// console.log("Final bill Rs", finalBill);



// Ques 28


// let choice = "5";
// let current_Balance = 5000;
// let withdraw_Money = 1000;
// let deposit_Money = 10;

// switch (choice) {
//      case "1":
//           console.log("Current balance:", current_Balance);
//           break;

//      case "2":
//           deposit_Money = current_Balance + deposit_Money;
//           console.log("New balance:", depositMoney);
//           break;

//      case "3":
//           if (withdraw_Money > 0)
//                if (withdraw_Money < current_Balance) {
//                     console.log("Remaining balance:", current_Balance);
//                } else {
//                     console.log("Insufficient balance !");
//                }
//           break;

//      case "4":
//           console.log("Thank You For Transaction");
//           break;
//           default:{
//                console.log("ERROR!");
//           }

// }



// Ques 29


// let num = 119;

// if (num >= 0) {
//     console.log("Postive");

// } else {
//     console.log("Negative");

// } if (num === 0) {
//     console.log("Zero");

// } if (num % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// } if (num > 100) {
//     console.log("Greater than 100");
// } if (num < 100) {
//     console.log("Less than 100");
// } else if (num === 100) {
//     console.log("Equal to 100");
// }



// Ques 30


// let studentName = "Ayush";
// let rollNumber = 18;
// let mathMarks = 100;
// let scienceMarks = 20;
// let englishMarks = 50;
// let totalMarks = mathMarks + scienceMarks + englishMarks;

// console.log("Name:", studentName);
// console.log("Roll no.:", rollNumber);
// console.log("Math:", mathMarks);
// console.log("Science:", scienceMarks);
// console.log("English:", englishMarks);
// console.log("Total Marks:", totalMarks);

// if (totalMarks / 3 <= 100) {
//     console.log("Percentage:", totalMarks / 3);
// } else {
//     console.log("Percentage: Error!");
// }

// if (mathMarks < 40 || scienceMarks < 40 || englishMarks < 40) {
//     console.log("Fail");

// }

// if (totalMarks >= 290 && totalMarks <= 300) {
//     console.log("A-grade");

// } else if (totalMarks >= 240 && totalMarks <= 270) {
//     console.log("B-grade");

// } else if (totalMarks >= 180 && totalMarks <= 210) {
//     console.log("c-grade");

// } else if (totalMarks >= 150 && totalMarks <= 200) {
//     console.log("D-grade");

// } else if (totalMarks >= 90 && totalMarks <= 140) {
//     console.log("E-grade");

// }
// else if (totalMarks < 60) {
//     console.log("F-grade");

// }
// else {
//     console.log("invalid marks !");

// }

// if (mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40) {
//     console.log("Pass");

// }