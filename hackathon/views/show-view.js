define(function () {
  const internals = {};
  const externals = {};

  externals.getIndex = function () {
    $("#form").submit(function (e) {
      e.preventDefault();

      var selectedValue = $("#select").val();

      console.log(selectedValue);

      return selectedValue;
    });
  };

  externals.render = function (show) {
    console.log(show);
    $("#header3").remove();

    let showHtml = `<aside>
        <img id="image" src="${show.src}"/>
        </aside>
        <div id=showCountry>${show.country}</div>
        <div class="info">
        <div id=showCity><strong>City: </strong> ${show.city}</div>
        <div id=year><strong>Year: </strong>${show.year}</div>
        <div id=event><strong>Event: </strong>${show.event}</div>
        </div>
        <button id="back">Back</button>`;
    $(".container").append(showHtml);
    $(".container").css("flex-direction", "row");
    $(".info").css("flex-direction", "collumn");
    $("#image").css("margin-top", "300px");
    $("#back").on("click", function () {
        window.location.hash = "#map";
      });
    return showHtml;
  };

  internals.goBack = function () {
    $("#back").on("click", function () {
        window.location.hash = "#map";
      });
  };

  return externals;
});
