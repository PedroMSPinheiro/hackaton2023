define(["views/map-view", "services/map-service"], function (
    mapView,
    mapService
  ) {
    const externals = {};
    const internals = {};

    externals.start = function () {
        mapView.render();
    }

    return externals;
  });