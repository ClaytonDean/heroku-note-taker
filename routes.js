// module.exports = function() {
//     // html 
//     app.get("/", function (req, res) {
//         res.sendFile(path.join(__dirname, "public/index.html"));
//     });
//     app.get("/notes", function (req, res) {
//         res.sendFile(path.join(__dirname, "public/notes.html"));
//     });
    
//     // api
    
//     app.get("/api/notes", function (req, res) {
    
//             notes = fs.readFileSync("public/db/db.json", "utf8");
//             notes = JSON.parse(notes);
//             res.json(notes);
//     });
    
//     app.post("/api/notes", function (req, res) {
//         try {
//             notes = fs.readFileSync("public/db/db.json", "utf8");
//             notes = JSON.parse(notes);
//             const newNote = {
//                 id: uuid(),
//                 title: req.body.title,
//                 text: req.body.text
//             }
            
//             notes.push(newNote);
    
//             notes = JSON.stringify(notes);
//             fs.writeFile("public/db/db.json", notes, "utf8", function (err) {
//                 if (err) throw err;
//             });
//             res.json(JSON.parse(notes));
    
//         } catch (err) {
//             res.json(notes);
//         }
//     });
    
//     app.delete("/api/notes/:id", function (req, res) {
      
//             notes = fs.readFileSync("public/db/db.json", "utf8");
//             notes = JSON.parse(notes);
//             notes = notes.filter(function (note) {
//                 return note.id != req.params.id;
//             });
//             notes = JSON.stringify(notes);
//             fs.writeFile("public/db/db.json", notes, "utf8", function (err) {
//                 if (err) throw err;
//             });
//             res.send(JSON.parse(notes));
//             res.json(notes);
//     });
// }