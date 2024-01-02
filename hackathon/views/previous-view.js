define(function () {
  const internals = {};
  const externals = {};

  internals.question = {
    question: "Who performed in the Super Bowl XLVII half time show?",
    answers: { 1: "Rihanna", 2: "Lady Gaga", 3: "Beyoncé" },
  };

  externals.renderMainView = function () {
    $("#start").empty();
    $("#tryAgain").remove();
    background = `<video autoplay muted loop id="myVideo">
    <source src="resources/video_up.mp4" type="video/mp4"></video>`
    div = $("#mainDiv");
    string = `<h2 id="header2"> ${internals.question.question} </h2>`;
    container = $(".container");
    div1 = `<div id="div1"></div>`;
    buttons = `<button class="quiz" id="button1">${internals.question.answers[1]}</button>
    <button class="quiz" id="button2">${internals.question.answers[2]}</button>
    <button class="quiz" id="button3">${internals.question.answers[3]}</button>
    `;

    $(string).appendTo("#start");
    $(div1).appendTo(container);
    $(buttons).appendTo("#div1");
    $(background).appendTo('body');

    

    console.log(internals.question.question);
    internals.addEvents();
  };

  internals.addEvents = function () {
    const button1 = $("#button1");
    const button2 = $("#button2");
    const button3 = $("#button3");

    button1.on("click", function () {
      internals.checkAnswer(1);
    });
    button2.on("click", function () {
      internals.checkAnswer(2);
    });
    button3.on("click", function () {
      internals.checkAnswer(3);
    });
  };

  internals.checkAnswer = function (id) {
    $("#div1").remove();
    $("#header2").remove();
    $("#myVideo").remove();
    if (internals.question.answers[id] === "Beyoncé") {
      window.location.hash = "#main";
      return;
    }
    internals.renderWrongAnswer();
  };

  internals.renderWrongAnswer = function () {
    $("body").css("background-image", 'url("resources/beyoncegif.gif")');
    $("body").append("<h3 id='tryAgain'>You are not a real fan...Try again!</h3>")
    setTimeout(externals.renderMainView,3000);

  };

  

  return externals;
});
