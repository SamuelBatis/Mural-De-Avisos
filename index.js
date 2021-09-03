const express = require('express');
const PORT = 3000;
const app = express()
const path = require("path")
const apiRoute = require("./routes/api")


app.use("/api", apiRoute)
app.use("/", express.static(path.join(__dirname, "Public")))



app.listen(PORT, () => {
    console.log("Server running on port: ", PORT)
})



