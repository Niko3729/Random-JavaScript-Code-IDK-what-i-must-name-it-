let input1 = 8;
let input2 = 49;
let op = "P";

switch (op) {
    case "+":
        console.log(input1 + input2);
        break;
    case "-":
        console.log(input1 - input2);
        break;
    case "*":
        console.log(input1 * input2);
        break;
    case "/":
        console.log(input1 / input2);
        break;
    default:
        console.log("OP is not found");
}
