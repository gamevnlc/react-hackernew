const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Article = mongoose.model('Article', articleSchema)

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

articleSchema.methods.clap = function () {
    this.clap++
    return this.save()
}

articleSchema.methods.comment = function(c) {
    this.comments.push(c)
    return this.save()
}
articleSchema.methods.addAuthor = function (author_id) {
    this.author = author_id
    return this.save()
}
articleSchema.methods.getUserArticle = function (_id) {
    Article.find({'author': _id}).then((article) => {
        return article
    })
}

module.exports = Article
