import express from 'express';

//create a web server
const app = express();

//define a route
const homeController = (req, res) => {
    res.send("Hello, from /home");
}
app.get("/home", homeController);

app.get("/", (req, res) => {
    res.send("Hello, from /");
});

app.listen(2021, () => {
    console.log("Server started on port 2021");
})