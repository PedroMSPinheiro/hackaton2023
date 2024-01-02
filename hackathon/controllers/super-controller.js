define(["views/super-view", "services/super-service", "views/map-view"], function (
    superView,
    superService,
    mapView
) {

    const internals = {};
    const externals = {};

    var showIndex;


    externals.start = function () {
        //internals.getShowIndex();
        internals.buttonHandler();
    };




    internals.buttonHandler = function () {
        showIndex = mapView.getSelectedCountry();
        $(".ag-canvas").empty();

        showService.getShow(showIndex.target.id, function() {
            showView.render(showService.getChosenData())
        }
        )

        //showView.render(showService.getShow(showIndex.target.id));
        
    };

    return externals;

});