// var done = true;
// var message = "";

// if (done) message = "완료";

// message = done && "완료";
// console.log(message);

// var done = false;
// var message = "";

// if (done) message = "미완료";

// message = done || "미완료";
// console.log(message);

function getStringLength(str) {
  str = str || "";
  return str.length;
}

console.log(getStringLength());
console.log(getStringLength("hi"));
