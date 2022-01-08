var arr = [1, 2, 3, 4];

console.log(arr.length);

for (var i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}

//operators

// ++ increamenbtor
//-- Decremeontor

// > greater than
// >= greaterthanorequal
// < less than
// <= less than or equal
// && operator
// || or
// == equals
// != not equals

if (1 != 1) {
  console.log("It satisfies");
} else if ("hari" != "hari") {
  console.log("It 2 satisfied");
} else if ("samara" == "samara") {
  console.log("samara satisfied");
} else {
  console.log("hasvdgh");
}
// diffrence Between == and ===

// "287284"
console.log(typeof 24);
if (1 === "1") {
  console.log("1 is eqaul to 1");
} else {
  console.log("1 is not eqaul to 1");
}

//Object Destructuring

if (1 == 1) {
  console.log("  works");
} else {
  console.log("doesmt work");
}

1 == 1 ? console.log("works") : console.log("doesn't work");

//destructing of object

var obj = {
  name: "sri",
  profession: "developer",
  lang: "javascript",
};

var obj2 = {
  name: "naresh",
  profession: "developer",
  lang: "javascript",
};

var { name, profession, lang } = obj;
var { name, profession, lang } = obj2;

console.log(name, obj.lang);

// *
// %
// /

console.log(3 * 3);
console.log(4 % 2);
console.log(10 / 3);

//program to loop trough a number array
//check if number multiple of 2 console,log red if num is miltiple of 3 console.log pink
//if number is multiple of both 2 and 3 console.log green else black
