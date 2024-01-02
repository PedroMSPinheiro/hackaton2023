define(["views/main-view"], function (mainView){

    const externals = {};
    const internals = {};
  
    externals.start = function () {
     internals.bindEventHandlers();
      mainView.render();
    }


    internals.bindEventHandlers = function () {
        mainView.bind("button", internals.buttonHandler);
      };

      internals.buttonHandler = function () {
          mainView.render();
          console.log("button clicked!");
        };

      return externals;

    });