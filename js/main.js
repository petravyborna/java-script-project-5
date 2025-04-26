const account = {
  accountName: "Jens Kraus", 
  balance: 1000,
  
  // display balance
  getBalance: function() {
    console.log(`Your current balance is: ${this.balance}`);
  },
  
  // deposit money
  deposit: function(amount) {
    this.balance += amount;
    console.log(`${amount} has been deposited. Your new balance is: ${this.balance}`);
  },
  
  //  withdraw money
  withdrawal: function(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`${amount} has been withdrawn. Remaining balance: ${this.balance}`);
    } else if (amount > this.balance) {
      console.log("Insufficient funds for this withdrawal.");
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  },
  
  // display the name
  getAccountName: function() {
    console.log(`The account holder's name is: ${this.accountName}`);
  },
  
  // errors
  accountError: function(message) {
    console.log(`An error occurred: ${message}`);
  }
};

function atm() {
  const message = parseFloat(
    prompt(
      "Select a choice 1.) See balance 2. Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
    )
  );

  switch (message) {
    case 1:
      account.getBalance();
      break;
    case 2:
      const depositAmount = parseFloat(prompt("Enter the deposit amount:"));
      account.deposit(depositAmount);
      break;
    case 3:
      const withdrawAmount = parseFloat(prompt("Enter the withdrawal amount:"));
      account.withdrawal(withdrawAmount);
      break;
    case 4:
      account.getAccountName();
      break;
    case 5:
      console.log("Thank you, goodbye!");
      break;
    default:
      account.accountError("Invalid choice. Please select a valid option.");
      break;
  }
}

// Start the code
atm();