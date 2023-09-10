(function (window) {
  var byeSpeaker = {};

  byeSpeaker.speak = function (name) {
    var greeting = "Good Bye " + name;
    console.log(greeting);
  };

  window.byeSpeaker = byeSpeaker;

})(window);
