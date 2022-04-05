const mongoose = require('mongoose')

const CommentSchema = require('./comments')
const PostSchema = require('./post')
const LocationSchema = require('./location')

const Comment = mongoose.model('comment',CommentSchema)
const Post = mongoose.model('post', PostSchema)
const Location = mongoose.model('location',LocationSchema)

module.exports ={
    Comment,
    Post,
    Location
}