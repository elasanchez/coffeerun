(function (window) {
  "use strict";
  var App = window.App;
  var $ = window.jQuery;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var Payment = App.Payment;
  var PAYMENT_SELECTOR = "[data-payment-order=\"form\"]";
  var WINDOW_SELECTOR = "[data-payment-order=\"greetings\"]";

  var dialogBox = new Payment(WINDOW_SELECTOR);
  var myTruck = new Truck("ncc-1701", new DataStore());
  window.myTruck = myTruck;

  // var formHandler = new FormHandler(FORM_SELECTOR);
  // var checkList = new CheckList(CHECKLIST_SELECTOR);
  // checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  // // formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  // formHandler.addSubmitHandler(function (data) {
  //
  //   //since we are passing data to work with "this" in each function, we can't use the
  //   //normal bind because this will not be passed correctly.
  //   myTruck.createOrder.call(myTruck, data);
  //   checkList.addRow.call(checkList, data);
  // });

  // console.log(formHandler);



  var paymentFormHandler = new FormHandler(PAYMENT_SELECTOR);
  paymentFormHandler.addSubmitHandler(function(data) {
    myTruck.createOrder.call(myTruck, data);
    dialogBox.generatemsg.call(dialogBox, data);
    //calls jquery modal function on id = "greet" DOM element
    $("#greet").modal();
  });

})(window);
