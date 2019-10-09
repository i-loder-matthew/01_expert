/*
-- WH judgement task
-- Key for Items:
    formal -
    informal -
    filler -
*/

var shuffleSequence = seq("consent", "instructions", seq(startsWith("practice")),  sepWith("sep", seq(shuffle(shuffle(randomize(startsWith("formal")), randomize(startsWith("informal"))), shuffle(randomize(startsWith("expert")), randomize(startsWith("non-expert")))))), "questionnaire");
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
      ],


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

  ["expert_1", "Question", { q: "<b>Un fils,</b>, à son père qui rentre du marché : \n Vu que tu as fait les courses pour le dîner, dis-moi ...", as: ["On va manger quoi ce soir?", "Qu'est-ce qu'on va manger ce soir"] }],
  ["non-expert_2", "Question", { q: "Un fils, à son père qui rentre du boulot : \n Vu que j'ai super faim, dis-moi ...", as: ["On va manger quoi ce soir?", "Qu'est-ce qu'on va manger ce soir"] }],
  ["expert_3", "Question", { q: "Une femme qui cherche les clés de la voiture à son mari : \n Comme tu as rangé la voiture hier soir, dis-moi ...", as: ["Elles sont oú, les clés?", "Où elles sont, les clés?"] }],
  ["non-expert_4", "Question", { q: "Une femme qui cherche les clés de la voiture à son mari : \n Comme je suis super pressée, dis-moi ...", as: ["Elles sont oú, les clés?", "Où elles sont, les clés?"] }],
  ["expert_5", "Question", { q: "Jean à son amie Margot qui a acheté une Honda Civic : \n Comme tu viens d'en acheter une, au fait ...", as: ["Ça coute à peu près combien une voiture comme ca?", "Combien ça coute à peu près  une voiture comme ça?"] }],
  ["non-expert_6", "Question", { q: "Jean, qui montre une Honda Civic dans la rue à son amie Margot : \n Comme j'ai vraiment besoin d'en acheter une, au fait ...", as: ["Ça coute à peu près combien une voiture comme ça?", "Combien ça coute à peu près  une voiture comme ça?"] }],
  ["expert_7", "Question", { q: "À propos du dernier scandale à la mairie, Jean à son ami qui est conseiller municipale \n Vu qu'ils parlent tous de ça, dis-moi ...", as: ["Il a fait quoi, le maire?", "Qu'est-ce qu'il a fait, le maire?"] }],
  ["non-expert_8", "Question", { q: "À propos du dernier scandale à la mairie, Jean à son copain dans un bar: \n Vu qu'ils parlent tous de ça, dis-moi ...", as: ["Il a fait quoi, le maire?", "Qu'est-ce qu'il a fait, le maire?"] }],
  ["expert_9", "Question", { q: "À la bibliothèque: Amélie qui cherche le livre Les Misérables à son ami Marc: \n Comme tu bosses ici, au fait ...", as: ["Il est où, ce livre?", "Où est il, ce livre?"] }],
  ["non-expert_10", "Question", { q: "À la bibliothèque: Amélie qui cherche le livre Les Misérables à son ami Marc: \n Comme le prof veut qu'on le lise, au fait ...", as: ["Il est où, ce livre?", "Où est il, ce livre?"] }],
  ["expert_11", "Question", { q: "Nicole à son ami Marc, qui travaille dans le magazin: \n Vu que c'est dans ton rayon, au fait ...", as: ["Il coute à peu près combien, ce jean?", "Combien il coute à peu près, ce jean?"] }],
  ["non-expert_12", "Question", { q: "Nicole, qui montre un jean à son ami Marc dans la vitrine : \n Vu qu'il serait parfait pour ma soirée de samedi au fait ...", as: ["Il coute à peu près combien, ce jean?", "Combien il coute à peu près, ce jean?"] }],
  ["expert_13", "Question", { q: "Adele à son amie Marie, qui prends des bonnes notes dans le cours: \n Adele: Comme je suis sûre que tu as bien écouté, au fait ...", as: ["On a quoi à reviser pour le prochain examen?", "Qu'est-ce qu'on a à reviser pour le prochain examen?"] }],
  ["non-expert_14", "Question", { q: "Marie à son amie Adele, qui est parfois distraite: \n Marie: Comme j'étais pas là au dernier cours, au fait ...", as: ["On a quoi à reviser pour le prochain examen?", "Qu'est-ce qu'on a à reviser pour le prochain examen?"] }],
  ["expert_15", "Question", { q: "Antoni à son ami Jean qui prend souvent le train:  \n Vu que tu as les horaires dans la main, dis-moi ...", as: ["Il s'arrête où le train de dix heures?", "Où il s'arrête le train de dix heures?"] }],
  ["non-expert_16", "Question", { q: "Antoni à son ami Jean devant la gare: \n Vu qu'il faut que je parte toute suite, dis-moi ...", as: ["Il s'arrête où le train de dix heures?", "Où il s'arrête le train de dix heures?"] }],
  ["expert_17", "Question", { q: "Deux amis dans un restaurant: \n Vu que tu viens ici tous les jours, dis-moi ...", as: ["Il coute combien, le plat du jour?", "Combien il coute, le plat du jour?"] }],
  ["non-expert_18", "Question", { q: "Deux amis dans un restaurant: \n Vu que j'ai pas trop faim ...", as: ["Il coute combien, le plat du jour?", "Combien il coute, le plat du jour?"] }],
  ["partial-knowledge_19", "Question", { q: "Un fils à son père qui rentre du marché : \n Comme j'ai vu des tomates et des pâtes dans ton panier, dis-moi ...", as: ["On va manger quoi ce soir?", "Qu'est-ce qu'on va manger ce soir"] }],
  ["no-knowledge_20", "Question", { q: "Un fils à son père qui rentre du marché : \n Comme j'ai pas vu ce que tu as acheté, dis-moi ...", as: ["On va manger quoi ce soir?", "Qu'est-ce qu'on va manger ce soir"] }],
  ["partial-knowledge_21", "Question", { q: "Une femme qui cherche les clés de la voiture, à son mari qui l'a rangée hier soir : \n Vu qu'on les mets toujours dans l'entrée ou la cuisine, au fait ...", as: ["Elles sont où, les clés, maintenant?", "Où elles sont, les clés maintenant?"] }],
  ["no-knowledge_22", "Question", { q: "Une femme qui cherche les clés de la voiture, à son mari qui l'a rangée hier soir : \n Vu que j'ai pas utilisé la voiture depuis trois jours, au fait ...", as: ["Elles sont où, les clés, maintenant?", "Où elles sont, les clés maintenant?"] }],
  ["partial-knowledge_23", "Question", { q: "Jean, à son amie Margot qui a acheté une Honda Civic d'occasion : \n J'ai vu trois annonces de Honda Civic avec des prix différents, au fait ...", as: ["Elle a couté combien ta Honda Civic?", "Combien elle a couté ta Honda Civic?"] }],
  ["no-knowledge_24", "Question", { q: "Jean, à son amie Margot qui a acheté une Honda Civic d'occasion : \n Comme je connais rien aux voitures, dis-moi ...", as: ["Elle a couté combien ta Honda Civic?", "Combien elle a couté ta Honda Civic?"] }],
  ["partial-knowledge_25", "Question", { q: "À propos du dernier scandale à la mairie, Jean, à son ami qui est conseiller municipale \n Certains disent que le maire est un ripou, et d'autres, que c'est un harceleur. Dis-moi ...", as: ["Il a fait quoi exactement, le maire?", "Qu'est-ce qu'il a fait exactement le maire?"] }],
  ["no-knowledge_26", "Question", { q: "À propos du dernier scandale à la mairie, Jean, à son ami qui est conseiller municipale \n Vu que je suis au courant de rien, dis-moi ...", as: ["Il a fait quoi exactement, le maire?", "Qu'est-ce qu'il a fait exactement le maire?"] }],
  ["partial-knowledge_27", "Question", { q: "À la bibliothèque: Amélie, qui cherche Les Misérables, à son ami Marc, qui y travaille \n Comme je sais qu'il est au troisième étage, dis-moi ...", as: ["Il est où exactement, ce livre?", "Où est il exactement, ce livre?"] }],
  ["no-knowledge_28", "Question", { q: "À la bibliothèque: Amélie, qui cherche Les Misérables, à son ami Marc, qui y travaille \n Comme je suis jamais venue ici, dis-moi ...", as: ["Il est où exactement, ce livre?", "Où est il, ce livre?"] }],
  ["partial-knowledge_29", "Question", { q: "Nicole à son ami Marc, qui travaille dans le magazin: \n Vu que il coute normalement €20, mais tu bénéficies d'une remise générale, dis-moi ...", as: ["Il coute à peu près combien, ce jean?", "Combien il coute à peu près, ce jean?"] }],
  ["no-knowledge_30", "Question", { q: "Nicole à son ami Marc, qui travaille dans le magazin: \n Vu que je n'ai jamais acheté un jean d'ici, dis-moi ...", as: ["Il coute à peu près combien, ce jean?", "Combien il coute à peu près, ce jean?"] }],
  ["partial-knowledge_31", "Question", { q: "Adele à son amie Marie, qui prends des bonnes notes dans le cours: \n Comme j'ai seulement entendu qu'on dois pas étudier les chapitres 1-3, au fait :", as: ["Il y a quoi à reviser pour le prochain examen?", "Qu'est-ce qu'il y a à reviser pour le prochain examen?"] }],
  ["no-knowledge_32", "Question", { q: "Adele à son amie Marie, qui prends des bonnes notes dans le cours: \n Comme j'étais pas là au dernier cours, au fait ...", as: ["Il y a quoi à reviser pour le prochain examen?", "Qu'est-ce qu'il y a à reviser pour le prochain examen?"] }],
  ["partial-knowledge_33", "Question", { q: "Antoni à son ami Jean qui prend souvent le train:  \n Vu que c'est soit sur quai 1 soit sur quai 3 normalement, dis-moi ..", as: ["Il s'arrete où le train de dix heures?", "Où il s'arrete le train de dix heures?"] }],
  ["no-knowledge_34", "Question", { q: "Antoni à son ami Jean qui prend souvent le train:  \n Vu que c'est ma première fois ici, dis-moi ...", as: ["Il s'arrete où le train de dix heures?", "Où il s'arrete le train de dix heures?"] }],
  ["partial-knowledge_35", "Question", { q: "Au restaurant : Marc, à son ami Jacob, qui est un habitué \n Comme il y a deux prix ici, dis-moi ...", as: ["Il coute combien, le plat du jour?", "Combien il coute, le plat du jour?"] }],
  ["no-knowledge_36", "Question", { q: "Au restaurant : Marc, à son ami Jacob, qui est un habitué \n Comme c'est ma première fois ici, dis-moi ...", as: ["Il coute combien, le plat du jour?", "Combien il coute, le plat du jour?"] }],
  ["formal_37", "Question", { q: "Un professeur s’addressant à son collègue du départment qui revient d’une conférence : \n Comme je n'étais pas là, dis-moi ...", as: ["Est-ce qu'il y avait pas d’etudiants de notre department à cette conference", "Est-ce qu'il n’y avait aucun etudiant de notre department à cette conference."] }],
  ["informal_38", "Question", { q: "Un étudiant s'adressant à un ami en revenant d'une conférence :  \n Comme je n'étais pas là, dis-moi ...", as: ["Est-ce qu'il y avait pas d’etudiants de notre department à cette conference", "Est-ce qu'il n’y avait aucun etudiant de notre department à cette conference."] }],
  ["formal_39", "Question", { q: "Le maire du village s'adressant a un employé :  \n Vu que vous étiez là hier soir, dis-moi ...", as: ["Vous n'avez pas vu de drapeaux sur la place?", "Vous n'avez vu aucun drapeux sur la place?"] }],
  ["informal_40", "Question", { q: "Un papa s'adressant à son enfant :  \n Vu que tu étais là hier soir, dis-moi ...", as: ["Tu n'as pas vu de drapeaux sur la place?", "Tu n'as vu aucun drapeux sur la place?"] }],
  ["formal_41", "Question", { q: "Un professeur s'addressant a ses élèves : \n Comme je ne me souviens pas, au fait ...", as: ["Vous n'avez aucun devoir à faire pendant les vacances?", "Vous n'avez pas de devoir à faire pendant les vacances?"] }],
  ["informal_42", "Question", { q: "Un mère s'adressant a son enfant : \n Comme je veux verifier, au fait ...", as: ["Tu n'as aucun devoir à faire pendant les vacances?", "Tu n'as pas de devoir à faire pendant les vacances?"] }],
  ["formal_43", "Question", { q: "Une affiche sur la porte d'un laboratoire : \n Il y des expériences actives ...", as: ["Merci de ne faire aucun bruit.", "Merci de ne pas faire de bruit."] }],
  ["informal_44", "Question", { q: "Une maman a ses enfants devant leur père qui dort : \n Comme votre père dort ...", as: ["Merci de ne faire aucun bruit.", "Merci de ne pas faire de bruit."] }],
  ["formal_45", "Question", { q: "Une collègue responsable d'organiser une fete pour la retraite d'un des ses collegues : \n Comme je veux verifier, dis-moi ...", as: ["Tout ses amis sont invités?", "Ses amis sont tous invités?"] }],
  ["informal_46", "Question", { q: "Une maman à son mari à propos de l'anniversaire de leur fils : \n Comme je veux verifier, dis-moi ...", as: ["Tout ses amis sont invités?", "Ses amis sont tous invités?"] }],
  ["formal_47", "Question", { q: "Un professeur a son assistant a la fin d'un examen : \n Comme beaucoup d'élèves ont terminé tôt, dis-moi ...", as: ["Toutes les copies sont rammassées?", "Les copies sont toutes rammassées?"] }],
  ["informal_48", "Question", { q: "Un élève s'addressant a son copain en sortant d'un examen :  \n Comme ça était très difficile, dis-moi ...", as: ["Toutes les copies sont rammassées?", "Les copies sont toutes rammassées?"] }],
  ["formal_49", "Question", { q: "Un hotelier à son collègue : \n Vu que l'événement commence très tôt ...", as: ["Toutes les tables sont décorées?", "Les tables sont tous décorées?"] }],
  ["informal_50", "Question", { q: "Une maman a son fils le jour de son anniversaire : \n Vu que l'événement commence très tôt ...", as: ["Toutes les tables sont décorées?", "Les tables sont tous décorées?"] }],
  ["formal_51", "Question", { q: "Le directeur de la banque à son employé : \n Comme nous partons, au fait ...", as: ["Toutes les lumières sont éteintes?", "Les lumières sont toutes éteintes?"] }],
  ["informal_52", "Question", { q: "Un père à son fils alors qu'ils quittent la maison :  \n Comme on part, au fait ...", as: ["Toutes les lumières sont éteintes?", "Les lumières sont toutes éteintes?"] }],
  ["formal_53", "Question", { q: "Un bibliothécaire à son assistant à la fin du semestre: \n Comme les vancances commencent la semaine prochaine, dis-moi ...", as: ["Tous les livres sont rendus?", "Les livres sont tous rendus?"] }],
  ["informal_54", "Question", { q: "Un élève à son copain à la fin du semestre: \n Comme les vancances commencent la semaine prochaine, dis-moi ...", as: ["Tous les livres sont rendus?", "Les livres sont tous rendus?"] }]
];
