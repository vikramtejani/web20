//PERSONAL ACCOUNT
function personAccount() {
  let firstname = "Vikram";
  let lastname = "Kumar";
  let incomes = [];
  let expenses = [];

  function accountInfo() {
    return `${firstname} ${lastname}`;
  }

  function accountBalance() {
    let accountBalance =
      totalIncome().totalIncome - totalExpense().totalExpense;
    return { accountBalance: accountBalance, description: "Account balance" };
  }

  function totalIncome() {
    var incomeSum = 0;
    incomes.forEach((el) => (incomeSum += el.income));
    return { totalIncome: incomeSum, description: "Total income" };
  }

  function totalExpense() {
    var expenceSum = 0;
    expenses.forEach((el) => (expenceSum += el.expense));
    return { totalExpense: expenceSum, description: "Total expence" };
  }

  function addIncome(newInc, incomeDescription) {
    incomes.push({ income: newInc, description: incomeDescription });
    return incomes[incomes.length - 1];
  }

  function addExpense(newExp, expenseDescription) {
    expenses.push({ expense: newExp, description: expenseDescription });
    return expenses[expenses.length - 1];
  }

  return {
    accountInfo: accountInfo,
    accountBalance: accountBalance,

    totalIncome: totalIncome,
    totalExpense: totalExpense,

    addIncome: addIncome,
    addExpense: addExpense,
  };
}

const innerFuncs = personAccount();

console.log(innerFuncs.accountInfo());
console.log(innerFuncs.addIncome(1000, "Good"));
console.log(innerFuncs.addIncome(10000, "Nicely"));
console.log(innerFuncs.addExpense(200, "Monthly software rental"));
console.log(innerFuncs.addExpense(100, "Monthly hardware rental"));
console.log(innerFuncs.totalIncome());
console.log(innerFuncs.totalExpense());
console.log(innerFuncs.accountBalance());
