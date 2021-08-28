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

  // your solution
}
