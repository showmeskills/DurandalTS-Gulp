"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['knockout'], function (ko) {
  var Services = function Services() {
    _classCallCheck(this, Services);

    this.title = ko.observable("Services Page");
  };

  return Services;
});