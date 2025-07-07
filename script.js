document.getElementById("grandparent").addEventListener("click", () => {
  console.log("grandparent");
},true);

document.getElementById("parent").addEventListener("click", () => {
  console.log("parent");
},true);

document.getElementById("child").addEventListener("click", () => {
  console.log("child");
},true);


// function grandparentHandler() {
//   console.log("grandparent");
//   parentHandler();
// }

// function parentHandler() {
//   console.log("parent");
//   childHandler();
// }

// function childHandler() {
//   console.log("child");
// }

// document.getElementById("grandparent").addEventListener("click", grandparentHandler);
// document.getElementById("parent").addEventListener("click", function (e) {
//   // prevent grandparent's handler
//   e.stopPropagation();
//   parentHandler();
// });
// document.getElementById("child").addEventListener("click", function (e) {
//   e.stopPropagation();
//   childHandler();
// });
