var placeObject = function(place, year, landmarks, city) {
  this.placeInput = place;
  this.yearInput = year;
  this.landmarkInput = landmark;
  this.cityInput = city;
}

placeObject.prototype.placeYear = function (){
  return this.placeInput + " " + this.yearInput;
}

function resetFields() {
    $("input#place").val("");
    $("input#year").val("");
    $("input#city").val("");
    $("input#landmark").val("");
}

$(document).ready(function(){
  $("form#testId").submit(function(event){
    event.preventDefault();

    var placeInput = $("input#place").val();
    var yearInput = parseInt($("input#year").val());
    var landmarkInput = $("input#landmark").val();
    var cityInput = $("input#city").val();
    var place = new placeObject(placeInput, yearInput, landmarkInput, cityInput);
    $("ul#triplist").append("<li><span class='clickable'>" + place.placeYear() + "</span></li>");

    $(".clickable").last().click(function(){
      $(".trip").show();
      $(".trip h2").text(place.placeYear());
      $(".place").text(place.placeInput);
      $(".year").text(year.yearInput);
      $(".landmark").text(landmark.landmarkInput);
      $(".city").text(city.cityInput);

    });
    resetFields();
  });

});
