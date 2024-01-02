define(function () {
  const internals = {
    handlers: {},
    elements: {},
  };

  const externals = {};

  internals.createBackground = function () {
    $("#start").empty();
    $("body").css("background-color", "black");
    //var aside = `<aside id="left"></aside>`
    //$("body").append(aside);
    $("body").css({ "background-image": "none" });
    var pic = `<img id="pic" src="resources/New Note.jpeg"></img>`;
    $("#start").append(pic);
  };

  internals.createP = function () {
    return '<p id="welcome">Welcome to Beyonce Fan Website!</p>';
  };

  internals.showHeader = function () {
    var beyonceHtml = `<div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter">BEYONCÉ</h3>
    </div>
  </div>`;
    $(".container").append(beyonceHtml);
  };

  internals.createButton = function () {
    return `<div id="buttons">
    <button class="send">Worldwide Tour</button>
    </div>`;
  };

  externals.render = function () {
    internals.elements.app = $("#start");

    internals.createBackground();
    internals.showHeader();
    internals.elements.app.append(internals.createP());
    internals.elements.app.append(internals.createButton());

    $(".send").on("click", function () {
      window.location.hash = "#map";
    });
  };

  externals.bind = function (event, handler) {
    internals.handlers[event] = handler;
  };

  return externals;
});
