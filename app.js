/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("Server-port")
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    {extended: true}
);

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/geltpAddress");
app.use("*",ipFn);

//** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to computer get api");
});

const computerRoutes = require("./routes/computer.routes");
computerRoutes(app);

app.listen(port, () => {
    console.log("Server is running...")
});
