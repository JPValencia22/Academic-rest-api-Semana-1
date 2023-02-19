/** packages computer*/

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const computerdSchema = new mongoose.Schema({
    id: {
        type: "Number",
        required: true,
        unique: true
    },
    brand: {
        type: "String",
        ref: "coll_brand",
        required: true
    },
    os: {
        type: "String",
        required: true,
    },
    reference: {
        type: "String",
        required: true,
        unique: true
    },
    memory: {
        type: "Number",
        required: true,
        min: 2,
        max: 64,
    },
    storage: {
        type: "Number",
        required: true,
    },
    color: {
        type: "String",
        required: true,
    },
    generation:{
        type: "String",
        required: true
    }
});

/** schema  exportation */

computerdSchema.plugin(validator);
module.exports = computerdSchema;

