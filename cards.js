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
    switch (suitRequest) {
      case "spades":
        console.log("s");
        suitRequest = "s";
        break;
      case "hearts":
        console.log("h");
        suitRequest = "h";
        break;
      case "clubs":
        console.log("c");
        suitRequest = "c";
        break;
      case "diamonds":
        console.log("d");
        suitRequest = "d";
        break;
      case "joker":
        console.log("joker");

        suitRequest = "joker";
        break;
      default:
        suitRequest = "facedown";
        break;
    }
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

    $("#result").replaceWith(
      "card-" + suitRequest + " " + "card-" + numberRandom
    );
  });
});
