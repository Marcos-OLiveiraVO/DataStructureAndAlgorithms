function decimalNumber(decimalNumber) {
  const remainderStack = new Stack();
  let number = decimalNumber;
  let remainder;
  let binaryString = "";
  while (number > 0) {
    remainder = Math.floor(number % 2);
    remainderStack.push(remainder);
    number = Math.floor(number / 2);
  }
  while (!remainderStack.isEmpty()) {
    binaryString += remainderStack.pop().toString();
  }
  return binaryString;
}

console.log(decimalNumber(233));
console.log(decimalNumber(10));
console.log(decimalNumber(1000));
