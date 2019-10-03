/*
-- WH judgement task
-- Key for Items:
    formal -
    informal -
    filler -
*/

var shuffleSequence = seq("consent", "instructions", seq(startsWith("practice")),  sepWith("sep", seq(shuffle(randomize(startsWith("expert")), randomize(startsWith("non-expert")))))),*/ "questionnaire");
var centerItems = true;

// var d3 = require('d3');

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

  ["expert_1", "Question", { q: "Un fils à son père qui rentre du marché: \n Le fils: Vu que tu as fait les courses pour le dîner, dis-moi" a: "[On va manger quoi ce soir?", "Qu'est-ce qu'on va manger ce soir"] }}],
  ["non-expert_2", "Question", { q: "Un fils à son père qui est rentré du boulot: \n Le fils: Vu que j'ai super faim, dis-moi:" a: "[On va manger quoi ce soir?", "Qu'est-ce qu'on va manger ce soir"] }}],
  ["expert_3", "Question", { q: "Une femme qui les clés de voiture à son mari \n La femme: Comme tu as rangé la voiture, dis-moi:" a: "[Elles sont oú, les clés?", "Où elles sont, les clés?"] }}],
  ["non-expert_4", "Question", { q: "Une femme qui les clés de voiture à son mari \n La femme: Comme je suis super pressée, dis-moi:" a: "[Elles sont oú, les clés?", "Où elles sont, les clés?"] }}],
  ["expert_5", "Question", { q: "Jean à son amie Margot qui a acheté une Honda Civic: \n Jean: Comme tu viens d'en acheter une, au-fait" a: "[Ça coute à peu près combien une voiture comme ca?", "Combien ça coute à peu près une voiture comme ça?"] }}],
  ["non-expert_6", "Question", { q: "Jean montre une Honda Civic dans la rue à son amie Margot. \n Jean: Comme j'ai vraiment besoin d'en acheter une, au-fait:" a: "[Ça coute à peu près combien une voiture comme ça?", "Combien ça coute à peu près une voiture comme ça?"] }}],
  ["expert_7", "Question", { q: "À propos du dernier scandale à la mairie, Jean à son ami qui est conseiller municipale \n Vu qu'ils parlent tous du ça, dis-moi:" a: "[Il a fait quoi, le maire?", "Qu'est-ce qu'il a fait le maire?"] }}],
  ["non-expert_8", "Question", { q: "À propos du dernier scandale à la mairie, Jean à son copain dans un bar: \n Vu qu'ils parlent tous du ça, dis-moi:" a: "[Il a fait quoi, le maire?", "Qu'est-ce qu'il a fait le maire?"] }}],
  ["expert_9", "Question", { q: "À la bibliothèque: Amélie qui cherche le livre Les Misérable à son ami Marc: \n Amélie: Comme tu bosses à la bibliothèque, au fait:" a: "[Il est où, ce livre?", "Où est il, ce livre?"] }}],
  ["non-expert_10", "Question", { q: "À la bibliothèque: Amélie qui cherche le livre Les Misérable à son ami Marc: \n Amélie: Comme le prof veut qu'on le lise, au fait:" a: "[Il est où, ce livre?", "Où est il, ce livre?"] }}],
  ["expert_11", "Question", { q: "Nicole à son ami Marc, qui travaille dans le magazin: \n Nicole: Vu que c'est dans ton rayon, au fait:" a: "[Il coute à peu près combien, ce jean?", "Combien il coute à peu près, ce jean?"] }}],
  ["non-expert_12", "Question", { q: "Nicole montre un jean à son ami Marc dans la vitrine \n Nicole: Vu que c'est parfait pour la soirée de samedi au fait:" a: "[Il coute à peu près combien, ce jean?", "Combien il coute à peu près, ce jean?"] }}],
  ["expert_13", "Question", { q: "Adele à son amie Marie, qui prends des bonnes notes dans le cours: \n Adele: Comme je suis sûre que tu as bien écouté, au-fait:" a: "[Il y a quoi à reviser pour le prochain examen?", "Qu'est-ce qu'il y a à reviser pour le prochain examen?"] }}],
  ["non-expert_14", "Question", { q: "Marie à son amie Adele, qui est parfois distraite: \n Marie: Comme j'étais pas là au dernier cours, au fait" a: "[Il y a quoi à reviser pour le prochain examen?", "Qu'est-ce qu'il y a à reviser pour le prochain examen?"] }}],
  ["expert_15", "Question", { q: "Antoni à son ami Jean qui prend souvent le train:  \n Vu que tu as les horaires dans la main, dis-moi:" a: "[Il s'arrete où le train de dix heures?", "Où il s'arrete le train de dix heures?"] }}],
  ["non-expert_16", "Question", { q: "Antoni à son ami Jean devant la gare: \n Vu qu'il faut que je parte toute suite, dis-moi" a: "[Il s'arrete où le train de dix heures?", "Où il s'arrete le train de dix heures?"] }}],
  ["expert_17", "Question", { q: "Deux amis dans un restaurant: \n Vu que tu viens ici tous les jours, dis-moi:" a: "[Il coute combien, le plat du jour?", "Combien il coute, le plat du jour?"] }}],
  ["non-expert_18", "Question", { q: "Deux amis dans un restaurant: \n Vu que j'ai pas trop faim:" a: "[Il coute combien, le plat du jour?", "Combien il coute, le plat du jour?"] }}]



];

/*
d3.csv("stim1.csv").then(function(data) {
  console.log(data[0]);
});
*/
