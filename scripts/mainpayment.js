// programmer: Luigi Austria Sanchez
// Ties all payment scripts together

(function(window) {
  "use strict";
  var App = window.App;
  var $ = window.jQuery;

  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var Payment = App.Payment;
  var Cashier = App.Cashier;
  var PAYMENT_SELECTOR = "[data-payment-order=\"form\"]";
  var WINDOW_SELECTOR = "[data-payment-order=\"greetings\"]";

  var dialogBox = new Payment(WINDOW_SELECTOR);
  var paymentFormHandler = new FormHandler(PAYMENT_SELECTOR);
  var myCashier = new Cashier("Elise-9017", new DataStore());
  window.myCashier = myCashier;

  paymentFormHandler.addSubmitHandler(function(data) {
    // myTruck.createOrder.call(myTruck, data);
    myCashier.logPayment.call(myCashier, data);
    dialogBox.generatemsg.call(dialogBox, data);
    //calls jquery modal function on id = "greet" DOM element
    $("#greet").modal();
  });

})(window);
