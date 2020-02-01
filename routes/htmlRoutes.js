var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../develop/public/index.html"));
  });

  app.get("/notes", function(req, res) {

    res.sendFile(path.join(__dirname, "../develop/public/notes.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../develop/public/index.html"));
  });
};
