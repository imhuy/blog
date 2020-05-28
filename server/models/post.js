const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var userSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    tag: {
        type: Array,
    },
    category: {
        type: Array,
        // default: 'user'
    },
    dateAdded: { type: Date, default: Date.now },
})
const Post = mongoose.model('post', userSchema);

module.exports = Post;