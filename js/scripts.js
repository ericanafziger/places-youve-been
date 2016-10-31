var placeObject = function(place, year, landmarks, city) {
  return(place + " " + year + " " + landmarks + " " + city);
}

$(document).ready(function(){
  $("form#testId").submit(function(event){
    event.preventDefault();

    var placeInput = $("input#place").val();
    var yearInput = parseInt($("input#year").val());
    var landmarkInput = $("input#landmark").val();
    var cityInput = $("input#city").val();
    var place = placeObject(placeInput, yearInput, landmarkInput, cityInput);
    $(".trueOutput").append(place);
  });

    $(".returnOutput").show();

});
