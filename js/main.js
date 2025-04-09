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
  
