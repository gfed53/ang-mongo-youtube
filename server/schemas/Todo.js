var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    description: { type: String, required: true },
    checked: { type: Boolean, required: true}
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;