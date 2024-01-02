define(["views/previous-view", "services/previous-service"], function (
  previousView,
  previousService
) {
  const internals = {};
  const externals = {};

  externals.start = function () {
    previousView.renderMainView();
  };


  return externals;
});
