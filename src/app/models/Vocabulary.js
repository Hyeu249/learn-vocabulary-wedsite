const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Take = new Schema({
    name: { type: String },
    projection: { type: String },
    // "English (n)": { type: String },

});

module.exports = mongoose.model('vocabularys', Take);
