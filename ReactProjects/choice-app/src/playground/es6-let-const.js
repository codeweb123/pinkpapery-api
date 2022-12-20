var nameVar = "Jiyon";
var nameVar = "Eric";

console.log("nameVar", nameVar);

//var + let function scoped && block level scoped

//const block scoped

var fullName = "Jiyon Trammell";

if (fullName) {
  var firstName = fullName.split(" ")[0];
  console.log(firstName);
}
