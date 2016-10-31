var placeObject = function(place, year, landmarks, city) {
  this.placeInput = place;
  this.yearInput = year;
  this.landmarkInput = landmark;
  this.cityInput = city;
}

placeObject.prototype.placeYear = function (){
  return this.placeInput + " " + this.yearInput;
}

$(document).ready(function(){
  $("form#testId").submit(function(event){
    event.preventDefault();

    var placeInput = $("input#place").val();
    var yearInput = parseInt($("input#year").val());
    var landmarkInput = $("input#landmark").val();
    var cityInput = $("input#city").val();
    var place = new placeObject(placeInput, yearInput, landmarkInput, cityInput);
    $(".returnOutput ul").append("<li class='clickable'>" + place.placeYear() + "</li>");

    $(".returnOutput").last().click(function(){
      $(".trip").show();
      $(".trip h2").text(place.placeYear());
      $(".place").text(placeInput);
      $(".year").text(yearInput);
      $(".landmark").text(landmarkInput);
      $(".city").text(cityInput);

    });
    resetFields();
  });

});
