/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
const distMoney = function(money, children) {
  if (children * 8 === money) {
    return children;
  }

  if (money < children || (money === 4 && children === 1)) {
    return -1;
  }

  const pending = money - children;
  const total = Math.floor(pending / 7);

  if (total >= children) {
    return children - 1;
  }

  if (total === children - 1 && pending % 7 === 3) {
    return total - 1;
  }

  return total;
};
