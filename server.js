const express = require("express");
const app = express();
const port = 3000;

// Setting up middleware
app.use(express.static("public"));
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

const homeRoutes = require("./routes/homeRoute");
app.use(homeRoutes);


app.listen(port, () => {
    console.log(`Listening at htpp://localhost:${port}`);
});