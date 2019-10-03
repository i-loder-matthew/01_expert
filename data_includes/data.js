/*
-- WH judgement task
-- Key for Items:
    formal -
    informal -
    filler -
*/

var shuffleSequence = seq("consent", "instructions", seq(startsWith("practice")), /* sepWith("sep", seq(shuffle(randomize(startsWith("filler")), shuffle(randomize(startsWith("formal")), randomize(startsWith("informal")))))),*/ "questionnaire");
var centerItems = true;


var defaults = [

  "Separator", {
      transfer: 1000, //wait for 1000ms
        //other options: "keypress", "click"
      normalMessage: "Please wait for the next sentence.", //message to be displayed
      // errorMessage: "Wrong. Please wait for the next sentence." //message to be displayed in red
  },

  "Question", {
      //"as" option is obligatory
      hasCorrect: false,
      randomOrder: true,
      showNumbers: true,
      instructions: "S'il vous plaît, lisez la réplique et choisissez la réponse qui vous semble la plus naturelle."
        //if a question has a correct answer,
          //keep it as the first element of the "as" option
  },

  "Form", {
      //"html" option is obligatory
      hideProgressBar: true,
      continueOnReturn: true,
      saveReactionTime: true
  }
];
/*
var items = [
  /*
  Do we need separators?
  Is there a way to import from CSV?
  *

  //ends after timer (1000ms)
  ["sep", "Separator", {transfer: 1000, normalMessage: "Merci d'attendre la prochaine phrase."}],

  //ends when key is press
  //["sep", "Separator", {transfer: "keypress", normalMessage: "Please press any key to continue."}],


  /*
  INTRODUCTION
  *

  ["consent",
    //type
    "Form",
    //obligatory option that includes a HTML file that is a questionnaire
    {html: { include: "consent.html" }
    //fields that need to have the right format when taking input from user
    // validators: {
      //age has to be a number
      // age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
    // }
  } ],

  ["instructions",
    "Form",
    {html: { include: "instructions.html"}
      }
  ],


  ["questionnaire",
    "Form",
    {html: {include: "questionnaire.html"}
      }
  ],


  //PRACTICE Items

  ["practice_01", "Question", {
    q: "Une maman à sa copine qui veux que ses enfants mangent sainement, mais:",
    as: [ "Les enfants mangent souvent des bonbons",
          "Les enfants souvent mangent des bonbons"]
        }
      ],

   ["practice_02", "Question", {
       q: "Un quebeuois demandant:",
       as: ["Jamais, je ne dirais ce-là",
            "Je ne  dirais jamais ce-là"]
        }
      ]


  // TARGET ITEMS

  /*
  TEMPLATE for all items
  ["type", "Question", {
    q: "...",
    as: [ "Option 1",
          "Option 2"]
        }
      ],
  *


];
*/
