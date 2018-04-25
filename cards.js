$(document).ready(function() {
  var suits = []; //an empty array of suits
  var suitRequest;
  var suitResult;

  // populates with suit ids detected by class
  getSuit = $(".suit-selector").each(function() {
    suits.push(this.id);
  });

  console.log("suits: " + suits);

  suitResult = function () {
    $("li").click(function() {
      //console.log(this.id);

      var suitRequest = this.id;

      console.log("suitRequest: " + suitRequest);
    });
    switch (suitRequest) {
        case "spades":
          console.log("s");
          return "s";
        case "hearts":
          return "h";
        case "clubs":
          return "c";
        case "diamonds":
          return "d";
        case "joker":
          return "joker";
        default:
          return "facedown";
      }
      //return suitRequest;
      // Listens for suit request
      // this is the click and comparison area
      // compares suits array to the clicked item id
};

  console.log("suitResult: " + suitResult());

  //need to append id as suit, no need for next two lines
  // var suit = ["h", "s", "c", "d"];
  // var suitResult = suit[Math.floor(Math.random() * suit.length)];

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

  var numberRandom = cardNumber[Math.floor(Math.random() * cardNumber.length)];

  console.log("randompick: " + numberRandom);

  yourCard = function() {
    switch (numberRandom) {
      case "joker":
        return "card-joker";
      default:
        return (
          "card-" + suitResult(suitResult) + "&nbsp;" + "card-" + numberRandom
        );
    }
  };
  console.log("Your Card CSS: " + yourCard());

  //$("#result").replaceWith(yourCard());
  $("li").click(function() {
    return $("#result").replaceWith(yourCard);
  });
});
