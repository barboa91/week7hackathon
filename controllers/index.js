
const { Comment, Location, Post } = require('../models')


const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id)
        if (post) {
            return res.status(200).json({ chef });
        }
        return res.status(404).send('post with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getLocations = async (req,res) =>{
    try{
        const locations = await Location.find()
        return res.status(201).json({
            locations
        });
    } catch (error){
        return res.status(500).json({error:error.message})
    }
}
const getPosts = async (req,res) =>{
    try{
        const posts = await Post.find()
        return res.status(201).json({
            posts
        });
    } catch (error){
        return res.status(500).json({error:error.message})
    }
}

module.exports = {
    getPostById,
    getPosts,
    getLocations

}