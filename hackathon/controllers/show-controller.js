define([
  "views/show-view",
  "services/show-service",
  "views/map-view",
], function (showView, showService, mapView) {
  const internals = { elements: {} };
  const externals = { elements: {} };

  var showIndex;

  internals.getShowIndex = function () {
    showIndex = showView.getIndex();
  };

  externals.start = function () {
    //internals.getShowIndex();
    internals.buttonHandler();
  };

  internals.buttonHandler = function () {
    internals.elements.start = $("#start");
    internals.elements.start.empty();
    showIndex = mapView.getSelectedCountry();

    showService.getShow(showIndex.target.id, function () {
      showView.render(showService.getChosenData());
    });

    //showView.render(showService.getShow(showIndex.target.id));
  };

  return externals;
});
