PennController.ResetPrefix(null);

PennController.Sequence("consent", "instructions", "practice", randomize("experiment"))

PennController("consent",
  newHtml("consent", "consent.html")
    .print()
  ,
  newButton("continue", "Cliquez suivant pour continuer")
    .print()
    .wait(
        getHtml("consent").test.complete()
            .failure( getHtml("consent").warn() )
    )
);

PennController("instructions",
    newHtml("instructions", "instructions.html")
        .print()
    ,
    newButton("continue", "Cliquez suivant pour continuer")
        .print()
        .wait()
);


PennController("practice1",
  defaultText
    .print()
  ,
  newText("<p>description<p>")
  ,
  newText("variable.ContextText")
  ,
  newText("variable.InfoState")
  ,
  newText("<br></br>")
  ,
  newText("answer1", "variable.Option1")
  ,
  newText("answer2", "variable.Option2")
  ,
  newSelector("text")
    .settings.add(getText("answer1"), getText("answer2"))
    .shuffle()
    .settings.log()
    .wait()
)

PennController.Template(
  variable => PennController("experiment",
    defaultText.print()
    ,
    newText("<p><em>description<p>")
    ,
    newText(variable.ContextText)
    ,
    newText("<p>" + variable.InfoState + "</p>")
    ,
    newText("answer1", variable.Option1)
      .settings.css("color", "blue")
    ,
    newCanvas("empty", 1, 20)
      .print()
    ,
    newText("answer2", variable.Option2)
      .settings.css("color", "blue")
    ,
    newSelector("text")
      .settings.add(getText("answer1"), getText("answer2"))
      .shuffle()

      .settings.log()
      .wait()
  )
);

PennController("questionnaire",
  newHtml("questionnaire", "questionnaire.html")
)
