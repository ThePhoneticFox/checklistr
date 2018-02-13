const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Item = new Schema({
    title: String,
    note: String,
    done: Boolean,
});

var ListSchema = new Schema({
    name: String,
    description: String,
    items: [Item]
});



module.exports = mongoose.model('List', ListSchema);