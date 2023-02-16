/** packages computer*/

const moongose = require("mongoose");
const  validator = require("mongoose-unique-validator");

const Schema = moongose.Schema;

const computerdSchema = new moongose.Schema({
    brand:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"coll_brand",
        required:true,
        unique: true
    },
    Os:{
        type: "String",
        require: true,
    },
    reference:{
        type: "String",
        required: true,
        unique : true
    },
    memory:{
        type:"Number",
        require: true,
        min: 2,
        max: 64
    },
    storage:{
        type:"Number",
        require: true,
    },
    Color:{
        type:"String",
        require: true
    }


});


/** schema  exportation */

teacherSchema.plugin(validator);
module.exports = computerdSchema;