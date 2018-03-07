// programmer: Luigi Austria Sanchez
// Defines Constructor for a cashier and creates function prototypes to log and print payments
(function(window) {

  var App = window.App || {};

  function Cashier(cashierId, db) {
    this.cashierId = cashierId;
    this.db = db;
  }

  Cashier.prototype.logPayment = function(payment) {
    console.log("logging payment for" + payment.usermail);
    this.db.add(payment.usermail, payment);
  }

  Cashier.prototype.printPayments = function() {
    var customerPaymentsArray = Object.keys(this.db.getAll());

    console.log("Casier #" + this.cashierId + " has received:");
    customerPaymentsArray.forEach(function(id) {
      console.log(this.db.get(id));
    }.bind(this));
    console.log(" payments.");
  }
  App.Cashier = Cashier;
  window.App = App;
})(window);
