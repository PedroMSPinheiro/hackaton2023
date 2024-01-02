define([], function () {
  const internals = {};
  const externals = {};

  internals.routes = {
    previousController: {
      hash: "#previousController",
      controller: "previous-controller",
    },

    main: {
      hash: "#main",
      controller: "main-controller",
    },

    map: {
      hash: "#map",
      controller: "map-controller",
    },

    showController: {
      hash: "#showController",
      controller: "show-controller",
    },

    superController: {
      hash: "#superController",
      controller: "super-controller",
    }
  };

  internals.defaultRoute = "previousController";
  internals.currentHash = "";

  externals.start = function () {
    window.location.hash = internals.routes[internals.defaultRoute].hash;
    setInterval(internals.hashCheck, 150);
  };

  internals.hashCheck = function () {
    if (window.location.hash === internals.currentHash) {
      return;
    }

    let routeName = Object.keys(internals.routes).find(function (name) {
      return window.location.hash === internals.routes[name].hash;
    });

    if (!routeName) {
      routeName = internals.defaultRoute;
      window.location.hash = internals.routes[routeName].hash;
    }

    internals.loadController(internals.routes[routeName].controller);
  };

  internals.loadController = function (controllerName) {
    internals.currentHash = window.location.hash;
    require(["controllers/" + controllerName], function (controller) {
      controller.start();
    });
  };

  return externals;
});
