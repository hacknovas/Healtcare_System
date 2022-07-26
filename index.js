const express = require("express");
require('./DB/conn');
const Patient = require('./DB/entries');
const Details = require('./DB/cont');
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.post("/saveAppoinment", async (req, res) => {
    try {
        const user = new Patient(req.body);
        const result = await user.save();
        res.status(201).send(result);
    } catch (e) {
        res.status(400).send(e);
        console.log("Not Uploaded");
    }
})

app.post("/conInfo", async (req, res) => {
    try {
        const user = new Details(req.body);
        const result = await user.save();
        res.status(201).send(result);
    } catch (e) {
        res.status(400).send(e);
    }
})


if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
}


app.listen(port, () => {
    console.log(`started ${port}`);
});