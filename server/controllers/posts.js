import PostMessage from "../models/post.js";

export const getPosts = async (req, res) => {
    try {
        const PostMessages = await PostMessage.find();
        res.status(200).json(PostMessages)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const createPost = async (req, res) => {
    try {
        const post = req.body;
        const exist = await PostMessage.find({title : post.title})
        if(exist.length > 0){
            res.status(409).json({message : "Titlpost already exist"})
        }else{
        const postm = PostMessage(post);
        await postm.save();
    }
        
    } catch (error) {
        res.status(409).json({message : error.message})
    }

}