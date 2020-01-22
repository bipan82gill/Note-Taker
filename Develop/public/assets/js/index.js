var $noteTitle = $("#note-title");
var $noteText = $("#note-textarea");
var $saveNoteBtn = $("#save-note");
var $newNoteBtn = $("#new-note");
var $noteList = $("#list-container #list-group");

// activeNote is used to keep track of the note in the textarea
var activeNote = {};

// A function for getting all notes from the db
var getNotes = function() {
  $.ajax({
    url:"api/notes", method:"GET"
  }).then(function(notesData){

   $("notes-title").append($("<ul/>").addClass("notes-list"));
   
    for (var i =0;i<length.notesData; i++){
      $("<li>").text(notesData[i].title).appendTo("ul");

    }

  });
  
}

// A function for saving a note to the db
var saveNote = function(note) {
{ title = $noteTitle.val().trim();
 text = $noteText.val().trim();
}
console.log()
$.post("/api/notes", SaveNote,
      function(data) {

      
        if (data) {
          alert("Yay! You saved your data!");
        }

      
        else {
          alert("Sorry you are unable to save");
        }

    
        

      });

  
};

// app.post("/api/notes", function(req, res) {
//   var newNote = req.body;

//   console.log(newNote);

//   NotesData.push(newNote);

//   res.json(newNote);
// });

// A function for deleting a note from the db
var deleteNote = function(title) {
  app.get('/api/notes/:id',(req,res)=>{
    var chosen = req.param.notesData.id;    
      console.log(chosen);
      var deletedItem = notesData.splice(1,1);
      console.log(notesData);

        });
      }

// If there is an activeNote, display it, otherwise render empty inputs
var renderActiveNote = function() {
  
};

// Get the note data from the inputs, save it to the db and update the view
var handleNoteSave = function() {
  var i =$note-id.val().trim();
  i++;
 var saveNote= 
 { 
   id : i,
  title = $noteTitle.val().trim(),
    text = $noteText.val().trim()
   }
   console.log(saveNote);
   $.post("/api/notes", SaveNote,
         function(data) {
   
         
           if (data) {
             alert("Yay! You saved your data!");
           }
   
         
           else {
             alert("Sorry you are unable to save");
           }
   
          });
        }


// Delete the clicked note
var handleNoteDelete = function(event) {
  
};

// Sets the activeNote and displays it
var handleNoteView = function() {
  
};

// Sets the activeNote to and empty object and allows the user to enter a new note
var handleNewNoteView = function() {
  $("#noteTitle").val("");
  $("#noteText").val("");
  
};

// If a note's title or text are empty, hide the save button
// Or else show it
var handleRenderSaveBtn = function() {
  
};

// Render's the list of note titles
var renderNoteList = function(notes) {
  
};

// Gets notes from the db and renders them to the sidebar
var getAndRenderNotes = function() {
  
};

$saveNoteBtn.on("click", handleNoteSave);
$noteList.on("click", ".list-group-item", handleNoteView);
$newNoteBtn.on("click", handleNewNoteView);
$noteList.on("click", ".delete-note", handleNoteDelete);
$noteTitle.on("keyup", handleRenderSaveBtn);
$noteText.on("keyup", handleRenderSaveBtn);

// Gets and renders the initial list of notes
getAndRenderNotes();
