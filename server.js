const express = require("express");
var path = require("path");
const app = express();
// port required to run our server
PORT = process.env.PORT || 3000;


app.use(express.urlencoded({exteded:true}));
app.use(express.json());
// api routes required to get request
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);
// app.get("/", function(req, res) {
//   res.end("welcome");
// });

// app.get("/notes", function(req, res) {
//   res.sendFile(path.join(__dirname, "./develop/public/notes.html"));
// });

// // If no matching route is found default to home
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./develop/public/index.html"));
// });
// server listening the port and run on it 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

