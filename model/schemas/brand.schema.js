/** packages brand*/

const moongose = require("mongoose");
const validator = require("mongoose-unique-validator");

const Schema = moongose.Schema;

const brandSchema = new moongose.Schema({
  name: {
    type: "String",
    required: true,
  },
  country: {
    type: "String",
    required: true,
  },
  foundation: {
    type: "String",
    required: true,
  },
  brandsValue: {
    type: "Number",
    required: true,
  }
});

/** schema  exportation */

brandSchema.plugin(validator);
module.exports = brandSchema;
