/*eslint-disable no-console*/

(function(window) {
  "use strict";
  //code will go here
  //Global App
  var App = window.App || {};

  function DataStore() {
    // custom console
    // console.log("running the DataStore function");
    this.data = {};
  }
  // creating add function in DataStore's prototype
  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
  };

  DataStore.prototype.get = function(key) {
    return this.data[key];
  };

  DataStore.prototype.getAll = function() {
    return this.data;
  };

  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  };

  //Attach DataStore fn to App Obj
  App.DataStore = DataStore;
  window.App = App;
})(window);
