(function(window) {
  "use strict";
  var App = window.App || {};
  // Using code that is defined somewhere else i.e., jQuery fn
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }
    //find a matching element in the DOM using that selector and assign the result to this.$formElement.
    this.$formElement = $(selector);

    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector " + selector);
    }
  }

  // Add a addSubmitHandler in FormHandler prototype
  FormHandler.prototype.addSubmitHandler = function(fn) {
    // custom console
    console.log("Setting submit handler for form");
    this.$formElement.on("submit", function(event) {
      // this is where the data control is suppresed from being sent to a server
      event.preventDefault();
      // this prints data from the GUI form when submit is called
      // var data = $(this).serializeArray();

      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value);
      });
      console.log(data);
      //using the function passed, use this data in that function
      fn(data);
      // this.reset is a built in reset form?
      this.reset();
      //change focus
      this.elements[0].focus();
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);