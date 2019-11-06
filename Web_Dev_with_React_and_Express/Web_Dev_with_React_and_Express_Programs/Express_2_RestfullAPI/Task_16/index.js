const express = require('express');
const app = express();
const fs = require('fs');
var webP = require("./src/webProject.json");

// get request displays the data that is written on the JSON file "webProject"
app.get("/api", (req, res) => {
    fs.readFile('./src/webProject.json', (err, data) => {
        if (err) res.send("File Not Found, Use Post To Add Data To File");
        else
            res.send(webP);
        res.end();
    })
})
// post request allows user to add data to the JSON file "webProject"
app.post("/api/:id/:title/:description/:url", (req, res) => {
    // pushing the data the user entered to the array 
    webP.push({ id: `${req.params.id}`, title: `${req.params.title}`, description: `${req.params.description}`, URL: `${req.params.url}` });
    // writing the changes made to the array
    fs.writeFile("./src/webProject.json", JSON.stringify(webP), (err) => {
        if (err) {
            res.send("File Not Changed");
        } else {
            res.send("File Changed");
        }
    })
})
// delete request allows user to remove data from the JSON file "webProject"
app.delete("/api", (req, res) => {
    /* the array is filtered in a way that all objects that do not have the id the user entered 
    will be returned to the array with the object with the id the user entered being left out */
    webP = webP.filter((obj) => {
        return obj.id !== `${req.query.remove}`;
    });
    // writing the array to the JSON file "webProject"
    fs.writeFile("./src/webProject.json", JSON.stringify(webP), (err) => {
        if (err) {
            res.send("Property Not Removed")
        } else {
            res.send("Property Removed")
        }
    })
})
// put request allows user to edit data in the JSON file "webProject"
app.put("/api/:key", (req, res) => {
    /* for each loop that is used to determine what objects title or description will be changed by identifying it by id */
    webP.forEach((obj) => { //obj is the index each object in the array
        // if the id entered by the user is equal to an id of any object in the array lines 50-54 will take place else line 56 takes place
        if (obj.id === `${req.query.id}`) {
            /* if the parameter 'key' is equal to "title" the data the user enter will change the title of the object 
            else if it equal to description the data entered will change the description of the object */
            if (`${req.params.key}` === "title") {
                obj.title = `${req.query.title}`;
            } else if (`${req.params.key}` === "description") {
                obj.description = `${req.query.description}`;
            }
        }else{
            console.log("id not found")
        }
    });
    // the edited array will be written to the JSON file "webProject"
    fs.writeFile("./src/webProject.json", JSON.stringify(webP), (err) => {
        if (err) {
            res.send("Property Not Modified")
        } else {
            res.send("Property Modified")
        }
    })
})

app.listen(8080, () => {
    console.log("Server Is Running");
});