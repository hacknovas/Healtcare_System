const mongoose = require("mongoose");

const DB = "mongodb+srv://mahi:mahimahi@cluster0.3xeyz.mongodb.net/datas?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => {
    console.log("Connection succesfuly");
}).catch((err) => {
    console.log("Fault");
});
