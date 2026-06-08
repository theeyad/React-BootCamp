export default function resultReducerFunction(currentResult, action) {
  const operationType = action.type;
  let { firstNum, secondNum } = action.payload;

  firstNum = Number(firstNum);
  secondNum = Number(secondNum);

  return operationType === "sum"
    ? firstNum + secondNum
    : operationType === "sub"
      ? firstNum - secondNum
      : operationType === "multi"
        ? firstNum * secondNum
        : firstNum / secondNum;
}
