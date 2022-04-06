const { Comment, Location, Post } = require('../models')

const getPostById = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    if (post) {
      return res.status(200).json({ chef })
    }
    return res.status(404).send('post with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getLocations = async (req, res) => {
  try {
    const locations = await Location.find()
    return res.status(201).json({
      locations
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.status(201).json({
      posts
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getCommentById = async (req, res) => {
  try {
    const { id } = req.params
    const comment = await Comment.findById(id)
    if (comment) {
      return res.status(200).json({ comment })
    }
    return res.status(404).send('comment with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find()
    return res.status(201).json({
      comments
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const addComment = async (req, res) =>{
    console.log(req.body)

    const { id } = req.params
    try{
        console.log(req.body)
        const comment  = await new Comment(req.body)
        await comment.save()

        const post = await Post.findById(id)
        post.comments.push(comment._id)
        await post.save()

        return res.status(201).json({
            comment
        });
    } catch(error){
        return res.status(500).json({error:error.message})
    }
}

module.exports = {
  getPostById,
  getPosts,
  getLocations,
  getComments,
  getCommentById,
  addComment
}
