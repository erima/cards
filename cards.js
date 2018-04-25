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
          return "s";
        case "hearts":
          console.log("h");
          return "h";
        case "clubs":
          return "c";
        case "diamonds":
          return "d";
        case "joker":
          return "joker";
        default:
          return "facedown";
      };
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

  $("li").click(function() {
    return $("#result").replaceWith("card-" + suitRequest+ "&nbsp;" + "card-" + numberRandom);
  });
      console.log("card-" + suitRequest+ "&nbsp;" + "card-" + numberRandom);
   });



    //return suitRequest;
    // Listens for suit request
    // this is the click and comparison area
    // compares suits array to the clicked item id



  //need to append id as suit, no need for next two lines
  // var suit = ["h", "s", "c", "d"];
  // var suitResult = suit[Math.floor(Math.random() * suit.length)];




  yourCard = function(numberRandom, suitRequest) {
    switch (numberRandom) {
      //case "joker":
       // return "card-joker";
      default:
        return (
          "card-" + suitRequest+ "&nbsp;" + "card-" + numberRandom
        );
    }
  };
  console.log("Your Card CSS: " + yourCard());

  //$("#result").replaceWith(yourCard());

});
