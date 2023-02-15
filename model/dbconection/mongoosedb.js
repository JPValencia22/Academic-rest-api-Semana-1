

const mongoose = require("moongose");

const mongodbInfo = config.get("db-connections.mongodb");

const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`;

module.exports = () => {
    mongoose.connect(connStr);

mongoose.connection.on("conected", () => {
console.log("mongodb server connected!")});

mongoose.connection.on("disconected", () => {
console.log("mongodb server disconnected!")});

mongoose.connection.on("error", () => {
console.log("mongodb server connection error!")});

mongoose.connection.on("SIGINT", () => {
    mongoose.connection.close(() => {

        console.log("mongodb server shutting down!")

    });
});
}
