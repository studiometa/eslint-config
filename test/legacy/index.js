(function iife(window) {
  'use strict';

  var foo = true;

  window.addEventListener('load', function onload() {
    console.log('hello world');
  });
})(window);
