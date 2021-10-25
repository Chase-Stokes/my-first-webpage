// Buiness logic
// function yourFav(input) {
//   return yourFavorites ;
// };

$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const favPerson = $("#aPerson").val();
    const place = $("#aPlace").val();
    const movie = $("#aMovie").val();
    const yourFavorites = [favPerson, place, movie];
    let second = yourFavorites[1];
    let first = yourFavorites[0];
    let third = yourFavorites[2];

    $(".one").text(second);
    $(".two").text(first);
    $(".three").text(third);
    $(".favList").text(yourFavorites);
  });
});