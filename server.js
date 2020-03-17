// dependencies 
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");
const uuid = require("uuid").v4;
const fs = require("fs");
const routes = require("./routes.js")

//configure middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let notes = [];

//// routes

// html 
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// api

app.get("/api/notes", function (req, res) {

        notes = fs.readFileSync("public/db/db.json", "utf8");
        notes = JSON.parse(notes);
        res.json(notes);
});

app.post("/api/notes", function (req, res) {

        notes = fs.readFileSync("public/db/db.json", "utf8");
        notes = JSON.parse(notes);
        const newNote = {
            id: uuid(),
            title: req.body.title,
            text: req.body.text
        }
        
        notes.push(newNote);
        
        notes = JSON.stringify(notes);
        fs.writeFile("public/db/db.json", notes, "utf8", function (err) {
            if (err) throw err;
        });
        res.json(JSON.parse(notes));
        res.json(notes);

});

app.delete("/api/notes/:id", function (req, res) {
  
        notes = fs.readFileSync("public/db/db.json", "utf8");
        notes = JSON.parse(notes);
        notes = notes.filter(function (note) {
            return note.id != req.params.id;
        });
        notes = JSON.stringify(notes);
        fs.writeFile("public/db/db.json", notes, "utf8", function (err) {
            if (err) throw err;
        });
        res.send(JSON.parse(notes));
        res.json(notes);
});

app.listen(PORT, function () {

    console.log("App listening on PORT " + PORT);
    console.log("localhost:" + PORT);

})