onEvent("button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
  });
});
onEvent("music", "click", function( ) {
  playSound("5-Seconds-of-Summer---Telephone-Busy-(Official-Video).mp3", true);
});
onEvent("text_input1", "input", function( ) {
  setProperty("screen1", "image", "assets/Michael-Clifford--Luke-Hemmings--Ashton-Irwin--Calum-Hood.jpg");
});
