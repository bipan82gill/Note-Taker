// var notesData= require("./develop/db/db.json");

const fs = require('fs');

// let notesData = fs.readFileSync('./Develop/db/db.json');
// // let notesData = JSON.parse(notes);
// console.log(notesData);


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  let notes = fs.readFileSync('./Develop/db/db.json');
  let notesData = JSON.parse(notes);
  console.log(notesData);
  
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function (req, res) {
     res.json(notesData);
    
  });

  
 
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function (req, res) {
    const note = req.body;
    notesData.push(note);
    console.log(notesData);  
    let data = JSON.stringify(notesData);
    fs.writeFile('../db/db.json', data);
});  
}
