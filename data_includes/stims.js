// This file is meant to convert the CSVs that we have been using into the appropriate format for IBEXfarm experiments.
var d3 = require('d3');


// Start by adding the items that don't change to the array
var items = [
  /*
  Do we need separators?
  Is there a way to import from CSV?
  */

  //ends after timer (1000ms)
  ["sep", "Separator", {transfer: 1000, normalMessage: "Merci d'attendre la prochaine phrase."}],

  //ends when key is press
  //["sep", "Separator", {transfer: "keypress", normalMessage: "Please press any key to continue."}],


  /*
  INTRODUCTION
  */

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
  */


];

// Read in the CSV:

d3.csv("stim1.csv").then(function(data) {
  console.log(data[0]);
});


// Use this to create and push an array of the following format to items:
/*
TEMPLATE for all items
["type", "Question", {
  q: "...",
  as: [ "Option 1",
        "Option 2"]
      }
    ],
*/
