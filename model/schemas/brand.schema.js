/** packages brand*/

const moongose = require("mongoose");
const  validator = require("mongoose-unique-validator");

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

/** schema  exportation */

brandSchema.plugin(validator);
module.exports = brandSchema;