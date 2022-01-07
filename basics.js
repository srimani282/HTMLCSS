//datatypes
// Numbers  1 2 3.....
// Strings  "jhsdvjhdvshj"
//Boolean    true false
//null   null
//undefined

console.log(typeof 3);
console.log(typeof "3");
console.log(typeof true);
console.log(typeof [2, 3, 4, 5, 6]);
console.log(typeof { name: "naresh", class: "10th" });

[
  { name: "naresh", class: "10th" },
  { name: "naresh", class: "10th" },
];

//variables

// function f1() {
//   var x;
//   x = 10;
//   const z = 10;
//   let y = 10;
//   function f2() {
//     var x = 35;
//     let y = 45;
//     console.log(x);
//     console.log(y);
//   }
//   f2();

//   console.log(x);
//   console.log(y);
// }
// f1();

//var

var p1 = 10;

if (true) {
  var p1 = 20;
}

console.log(p1);

//let
let p2 = 10;

if (true) {
  let p2 = 20;
  console.log(p2);
}

console.log(p2);

//normal function
function b1(numer, cab) {
  console.log(numer, cab);
}
b1("aghsvcag", "ola");

//Arrow Function
const f3 = (data) => {
  console.log("arrow Function", data);
};

f3("harish");

var name = { name: "naresh", class: "10th" };

console.log(name.class);

var arr = [12, 20, 30, 40];

console.log(arr[1]);
