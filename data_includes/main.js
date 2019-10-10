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


PennController("practice",
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
    ,
    newText("answer2", variable.Option2)
    ,
    newSelector("text")
      .settings.add(getText("answer1"), getText("answer2"))
      .shuffle()
      
      .settings.log()
      .wait()
  )
)

PennController(

    newImage("logo", "pcibex-logo.png")     // New Image element named "logo" using the file "pcibex-logo.png"
        .settings.size(150,200)             // Resize it to 150x200px
        .print()                            // Show the image on the page
    ,
    newButton("Start reading")              // New unnamed element named "start" with text "Start reading"
        .print()                            // Show this element on the page
        .wait()                             // Wait until the button is clicked
        .remove()                           // Remove the button
    ,
    getImage("logo")                        // Refer back to the Image element named "logo"
        .remove()                           // Remove it from the page
    ,
    newText("sentence", "Hello world")      // New Text element named "sentence" with text "Hello world"
        .print()                            // Show this element on the page
    ,
    newTimer(2000)                          // New unnamed Timer element of 2000ms
        .start()                            // Start the timer
        .wait()                             // Wait until the timer has ended
    ,
    getText("sentence")
        .remove()                           // Remove the Text element named "sentence" from the page
    ,
    newText("<p>What did the sentence say?</p>")
        .print()                            // Print the question
    ,
    newTextInput()                          // New unnamed TextInput element
        .print()                            // Print the input box
    ,
    newText("<p>How confident are you that it is indeed what the sentence said?</p>")
        .print()                            // Print the question
    ,
    newScale(5)                             // New unnamed Scale element with 5 points
        .settings.slider()                  // Make it a slider
        .print()                            // Show it
        .wait()                             // Wait until one of the 5 points is selected

).setOption("hideProgressBar",true)         // The progress bar should not be visible for this trial
