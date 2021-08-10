"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["knockout"], function (ko) {
  var About = function About() {
    _classCallCheck(this, About);

    this.title = ko.observable("About Page");
  };

  return About;
});