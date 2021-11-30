const FacebookPost = require('../models/FacebookPost');
const fbvalidator = require('../middlewares/fbpostValidator');


const getAllPosts = async(req, res, next)=>{
    try{
        const allPost = await FacebookPost.find();
        res.render('../views/index.ejs', {
            favoriteData: allPost, notice: ''
        });
    }catch(err){
        return res.status(500).json(err);
    }
};

const addNewPost = async (req, res, next)=>{
    const postInfo = req.body;
    if(fbvalidator.postValidator){
        try{
            const newPost = {
                title: postInfo.title,
                content: postInfo.content,
                timeOfPost: new Date().getDate()
            };
            await FacebookPost.create(newPost);
            res.render('../views/index.ejs', {
                favoriteData: await FacebookPost.find(), notice: 'Post is created'
            });
        }catch(err){
            return res.status(500).json(err);
        }
    }
    return res.status(400).json(fbvalidator.postValidate[0]);
};


const updatePost = async(req, res, next)=>{
    const postInfo = req.body;
    const id = req.params.id;
    if(!id){
        return res.status(400).json("Cant find posts");
    }
    if(fbvalidator.postValidator){
        try{
            const editPost = {
                title: postInfo.title,
                content: postInfo.content,
                timeOfPost: new Date().getDate()
            };
        
            await FacebookPost.findByIdAndUpdate(id, editPost);
            res.render('../views/index.ejs', {
                favoriteData: await FacebookPost.find(), notice: 'Post is updated'
            });
        }catch(err){
            return res.status(500).json(err);
        }
    }
    return res.status(400).json(fbvalidator.postValidate[0]);
};


const deletePost = async(req, res, next) => {
    const id = req.params.id;
    if(!id){
        return res.status(400).json("Cant find posts");
    }
    try{
        await FacebookPost.findByIdAndDelete(id);
        res.render('../views/index.ejs', {
            favoriteData: await FacebookPost.find(), notice: 'Post is deleted'
        });
    }catch(err){
        return res.status(500).json(err);
    }
};

module.exports = {
    getAllPosts,
    addNewPost,
    updatePost,
    deletePost,
};