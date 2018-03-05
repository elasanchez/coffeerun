(function (window) {
//Why do Row and addRow both append to $element??


  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;
  //constructor
  function CheckList(selector) {
    if(!selector) {
      throw new Error("No selector provided");
    }

    this.$element = $(selector);
    if(this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  CheckList.prototype.addClickHandler = function (fn) {
    this.$element.on("click", "input", function (event) {
      var email = event.target.value;
      this.removeRow(email);
      fn(email);
    }.bind(this));
  };

  CheckList.prototype.addRow = function (coffeeOrder) {
    // Remove any existing rows that match the email emailAddress
    this.removeRow(coffeeOrder.emailAddress);

    //Create a new instace of a row, using the coffee order information
    var rowElement = new Row(coffeeOrder);

    //Add the new row instance's $element property to the CheckList
    this.$element.append(rowElement.$element);
  };

  CheckList.prototype.removeRow = function (email) {
    this.$element.find("[value=\"" + email + "\"]").closest("[data-coffee-order=\"checkbox\"]").remove();
  };



  //constructor
  function Row(coffeeOrder) {
    // Creating elements for the DOM subtree
    var $div = $("<div></div>", {"data-coffee-order":"checkbox","class":"checkbox"
    });
    var $label = $("<label></label>");
    var $checkbox = $("<input></input>", {"type":"checkbox","value":"coffeeOrder.emailAddress"
    });

    var description = coffeeOrder.size + " ";
    if(coffeeOrder.flavor) {
      description += coffeeOrder.flavor + " ";
    }
    description += coffeeOrder.coffee + ", ";
    description += " (" + coffeeOrder.emailAddress + ")";
    description += " ["+ coffeeOrder.strength + "x]";

    // piece all the elements into a subtree
    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    // attach this subtree DOM to the selector e.g., data-coffee-order="checklist"
    this.$element = $div;
  }

  App.CheckList = CheckList;
  window.App = App;
})(window);
