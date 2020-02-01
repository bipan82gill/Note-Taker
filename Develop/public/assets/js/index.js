var $noteTitle = $("#note-title");
var $noteText = $("#note-area");
var $saveNoteBtn = $("#save-note");
var $newNoteBtn = $("#new-note");
var $noteList = $("#list-container");
var $deleteNote = $("#delete-note");
var $noteId = $("#noteId");

// A function for getting all notes from the db
function getNotes() {
  // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
  $.ajax({ url: "/api/notes", method: "GET" })
    .then(function (notesData) {

      // Here we then log the tableData to console, where it will show up as an object.
      console.log(notesData);
      console.log("------------------------------------");

      // Loop through and display each of the customers
      for (var i = 0; i < notesData.length; i++) {

        // Get a reference to the tableList element and populate it with tables
        //   var $noteList = $("#list-container");

        // Then display the fields in the HTML (Section Name, Date, URL)
        var listItem = $("<li class='list-group-item mt-4'>");

        listItem.append(
          $("<h2>").text("Note #" + (i + 1)),
          $("<hr>"),
          $("<h2>").text("ID: " + notesData[i].id),
          $("<h2>").text("Title: " + notesData[i].Title),
          $("<h2>").text("Text: " + notesData[i].Text)
        );

        $noteList.append(listItem);
      }
    });
}

// Get the note data from the inputs, save it to the db and update the view
var handleNoteSave = function () {
  debugger;
  alert("save button clicked");
  lastNoteId = notesData.length + 1;

  if (lastNoteId < 0) {
   var id = 1;
  }
  else
    id = lastNoteId;
}

var saveNote = {
  ID: id,
  title: $noteTitle.val(),
  text: $noteText.val()
}
$.post("/api/notes", saveNote, function (req, res) {

  //   var newNote = req.body;

  console.log(saveNote);

  notesData.push(saveNote);

  res.json(saveNote);
});


var handleNewNoteView = function () {
  alert("You open a new note");
  $noteTitle.val("")
  $noteText.val("");

};


var deleteNote = function (title) {

  alert("Do you want to delete this note")
  $.delete("/api/notes/:id", function (req, res) {
    console.log(req.params);


    // get the db - notesData
    $($noteList, listItem).on('click', function (e) {
      req.params.id = ($(this).index());
      var idToTrash = req.params.id;
      notesData.splice(deleted, 1);

    });
  });
}

$noteList.on("click", getNotes);
$deleteNote.on("click", deleteNote);
$saveNoteBtn.on("click", handleNoteSave);
$newNoteBtn.on("click", handleNewNoteView);

