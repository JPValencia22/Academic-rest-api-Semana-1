/** packages marca*/

const moongose = require("mongoose");

const Schema = moongose.Schema;

const brandSchema = new moongose.Schema({
    name : {
        type: "String",
        require: true,
    },
    country : {
        type: "String",
        require: true,
    },
    foundation : {
        type: "String",
       require: true,
    },
    brandsValue : {
        type: "Number" ,
        require: true ,
    }

});