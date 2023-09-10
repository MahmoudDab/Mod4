(function (window) {
  var helloSpeaker = {};

  helloSpeaker.speak = function (name) {
    var greeting = "Hello " + name;
    console.log(greeting);
  };

  window.helloSpeaker = helloSpeaker;

})(window);
