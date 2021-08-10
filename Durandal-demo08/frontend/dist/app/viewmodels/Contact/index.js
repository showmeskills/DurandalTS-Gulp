"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['knockout'], function (ko) {
  var Contact = function Contact() {
    _classCallCheck(this, Contact);

    this.title = ko.observable("Contact Page");
  };

  return Contact;
});