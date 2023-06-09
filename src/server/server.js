const express = require('express');
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
    res.send("Welcome to the homepage");
});

app.get("/fruits", (req,res) => {
    res.sendFile("/Users/sanjeevmidda/Desktop/server-fruits/src/fruitsDB.json")
})
app.listen(PORT, () => {
    console.log("Server is up and running on PORT: " + PORT);
});
