(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
  
      if (name.charAt(0).toLowerCase() === "j") {
        byeSpeaker.speak(name);
      } else {
        helloSpeaker.speak(name);
      }
    }
})();
