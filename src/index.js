module.exports = function check(str, bracketsConfig) {
  let stack = [];
  const OPEN_BRACKETS = [];
  const CLOSED_BRACKETS = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    OPEN_BRACKETS.push(bracketsConfig[i][0]);
  }

  for (let i = 0; i < bracketsConfig.length; i++) {
    CLOSED_BRACKETS.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let indexOpenElem = OPEN_BRACKETS.indexOf(currentSymbol);
    let indexClosedElem = CLOSED_BRACKETS.indexOf(currentSymbol);
    let topElem = stack.length ? stack[stack.length - 1] : null;
    if (indexOpenElem > -1 && topElem !== CLOSED_BRACKETS[indexOpenElem]) {
      stack.push(currentSymbol);
    } else {
      if(stack.length === 0) {
        return false
      } else if (OPEN_BRACKETS[indexClosedElem] === topElem) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
  // your solution
}
