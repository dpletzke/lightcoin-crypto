// Here's a list of features that our code needs to support:

// Allow multiple accounts to be created
// Each account can have many transactions
// Allow withdrawals and deposits into accounts
// Allow us to retrieve the transaction history of an account (all withdrawals and deposits)
// Allow us to retrieve the current balance of the account at any time
// Don't allow withdrawals that exceed the remaining balance of the account


class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
    this.transactions = [];
  }
  get myBalance() {
    return this.balance + this.transactions.reduce((acc, trans) => acc + trans.value(), 0);
    }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    this.time = new Date();
    // this.account.balance += this.amount;
    this.account.addTransaction(this);
  }
}

class Withdrawal extends Transaction{
  value() {
    return -this.amount;
  }
}
class Deposit extends Transaction{
  value() {
    return this.amount;
  }
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");
// console.log(myAccount);

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
// console.log('Transaction 1:', t1);

t2 = new Deposit(100, myAccount);
t2.commit();
// console.log('Transaction 2:', t2);

// console.log(myAccount);
console.log(myAccount.myBalance);

