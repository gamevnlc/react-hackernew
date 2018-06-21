const mongoose = require("mongoose")
const Schema = mongoose.Schema;

let articleSchema = new Schema({
    text: String,
    title: String,
    description: String,
    feature_img: String,
    claps: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [
        {
            author: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            text: String
        }
    ]
})

