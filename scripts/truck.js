/*eslint no-console: "error"*/

(function(window){
  "use strict";
  //declare and initialize App with existing window's App variable or new using {}
  var App = window.App || {};

  function Truck(truckId, db) {
    // Creating truckId and db attributes for Truck obj and initializing with params
    this.truckId = truckId;

    //db is the DataStore Database!
    this.db = db;
  }

  Truck.prototype.createOrder = function(order) {
    // custom console
    console.log("Adding order for "+ order.emailAddress);
    this.db.add(order.emailAddress, order);
  };

  Truck.prototype.deliverOrder = function (customerId) {
    // custom console
    console.log("Delivering order for" + customerId);
    this.db.remove(customerId);
  };

  Truck.prototype.printOrders = function(){
    var customerIdArray = Object.keys(this.db.getAll());

    console.log("Truck #" + this.truckId + " has pending orders:");
    customerIdArray.forEach( function(id){
      console.log(this.db.get(id));
      //bind(this) binds the owner of the function's instance to the function
      //normally this is not defined inside a callback function.
    }.bind(this));
  };


  // Adding a function prototype called Truck and assigning the fn Truck we just created
  App.Truck = Truck;

  // Update the App in window object
  window.App = App;
})(window);
