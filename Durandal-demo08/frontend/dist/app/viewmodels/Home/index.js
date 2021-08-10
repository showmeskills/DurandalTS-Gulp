"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['knockout'], function (ko) {
  var Home = function Home() {
    _classCallCheck(this, Home);

    this.title = ko.observable("Home Page");
  };

  return Home;
});