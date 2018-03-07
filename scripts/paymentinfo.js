// programmer: Luigi Austria Sanchez
// Creates DOM elements dynamically to be used for dialog box
(function(window) {
  //Why do Row and addRow both append to $element??

  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;
  //constructor
  function Payment(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  Payment.prototype.generatemsg = function(info) {
    var dialogBox = new Greeting(info);
    this.$element.append(dialogBox.$element);
  };

  //constructor
  function Greeting(paymentInfo) {
    // Creating elements for the DOM subtree
    var $div = $("<div></div>", {
      id: "greet",
      class: "modal"
    });
    var $p = $("<p></p>");
    var $a = $("<a></a>", {
      href: "#",
      rel: "modal:close"
    });

    var description = "Thank you for your payment, ";
    description += paymentInfo.title + " " + paymentInfo.username + ". <br>";
    description += "Have a great day!";

    // piece all the elements into a subtree
    $p.append(description);
    $div.append($a);
    $div.append($p);

    // attach this subtree DOM to the selector e.g., data-coffee-order="checklist"
    this.$element = $div;
  }

  App.Payment = Payment;
  window.App = App;
})(window);
