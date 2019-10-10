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
    newText("<p><em>S'il vous plaît, choisissez la réponse qui vous semble la plus naturelle. <p>")
    ,
    newCanvas("empty", 1, 10)
      .print()
    ,
    newText(variable.ContextText)
    ,
    newCanvas("empty", 1, 10)
      .print()
    ,
    newText(variable.InfoState)
    ,
    newCanvas("empty", 1, 25)
      .print()
    ,
    newText("answer1", variable.Option1)
      .settings.css("color", "blue")
      .settings.center()
    ,
    newCanvas("empty", 1, 15)
      .print()
    ,
    newText("answer2", variable.Option2)
      .settings.css("color", "blue")
      .settings.center()
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
