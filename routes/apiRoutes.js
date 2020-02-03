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

  // API for post data into json
  app.post("/api/notes", function (req, res) {
    const note = req.body;
    notesData.push(note);
    console.log(notesData);  
    let data = JSON.stringify(notesData);
    fs.writeFile('../db/db.json', data);
});  

//API for update data into json
app.put("/api/notes/:id",function(req,result){
  var chosen = req.params.id;

  console.log(chosen);
    if (chosen === result[i].id) {
      var data = JSON.stringify(req.body);
      fs.writeFileSync("../Develop/db/db.json",data)
  }

});
}
