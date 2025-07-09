document.getElementById("grandparent").addEventListener("click", (e) => {
  console.log("grandparent");
  e.stopPropagation();
},false);

document.getElementById("parent").addEventListener("click", (e) => {
  console.log("parent");
  e.stopPropagation();
},false);

document.getElementById("child").addEventListener("click", (e) => {
  console.log("child");
  e.stopPropagation();
},false);


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
