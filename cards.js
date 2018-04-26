$(document).ready(function() {
  var suits = []; //an empty array of suits
  var suitRequest;
  var suitResult;

  // populates with suit ids detected by class
  getSuit = $(".suit-selector").each(function() {
    suits.push(this.id);
  });

  console.log("suits: " + suits);

  $("li").click(function() {
    suitRequest = this.id;

    console.log("suitRequest: " + suitRequest);

    var cardNumber = [
      "a",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "j",
      "q",
      "k",
      "joker",
      "joker"
    ];

    numberRandom = cardNumber[Math.floor(Math.random() * cardNumber.length)];
    console.log("randompick: " + numberRandom);
    console.log("card-" + suitRequest + "&nbsp;" + "card-" + numberRandom);

    $("li").click(function(){
      switch(suitRequest) {
        case "joker":
          return $("#result").removeClass().addClass("card " + "card-" + suitRequest);
        default:
          return $("#result").removeClass().addClass("card " + "card-" + suitRequest + " " + "card-" + numberRandom);
    };
    });
  });
});
