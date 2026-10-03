let sentence = "my name is raja";

let result = sentence
  .split(" ")
  .map(word => word.split("").reverse().join(""))
  .join(" ");

console.log(result);
