const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());


app.get("/", (req, res) => {
    res.json({
        "message": "Hello Joro"
    });
})


app.listen(8040, () => {
    console.log("Server is running on port 8040...")
})