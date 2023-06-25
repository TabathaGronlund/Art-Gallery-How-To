const {response , request } = require('express')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY


module.exports = {
    allComments: async (req,res) => {
        const allComments = await Comment.find()
        try {
            // console.log(allMovies)
            res.json(allComments)
        }
        catch(err){
            res.status(500).json({message:'XXX Error(Find all) XXXXX', error:err})
        }
    },

// get Comment by Id 
getOneCommentWithUserLogin: async (req,res) => {
    const temUser = jwt.verify(req.cookies.userToken, SECRET )
    // console.log(temUser._id)
    try{
        console.log('XXXXXparamsxxxxxxx',request.params)
        const oneComment = await Comment.findById({_id:req.params.id})
        console.log(oneComment.user_id)
        res.json( {Comment: oneComment ,'temuser':temUser} )
    }
    catch(err){
        res.status(500).json({message: 'XXX Error(FindOne) XXXXX', error:err})
    }
},

getOneComment: async (req,res) => {
    try{ 
        const oneComment = await Comment.findById({_id:req.params.id})
        res.json(oneComment)
    }
    catch {
        res.status(500).json({message: 'XXX Error(FindOne) XXXXX', error:err})
    }
},


// create 
createCommentWithLogin: async(req,res) => {
    try{
        // take up Json webtoken then decode it
        console.log('We are at create Movie')
        // console.log(req.cookie.userToken)
        // const decodedJwt = jwt.decode(req.user , {complete:true})
        // console.log(decodedJwt);
        // access decodedjwt object(key Id ) and set it to variable
        const user_id = req.user;
        // console.log('User Id', user_id);
        // req data from body front page and add uuid from the payload for User_Id field
        const comment = req.body
        comment['user_id'] = user_id
        const completeComment = await Comment.create(comment)
        // console.log(completeMovie);
        // send back to the back end data
        res.json(completeComment)
    }
    catch(err){            
        console.log(err)
        res.status(400).json({message:'xxx Error(Comment Creation) XXX', error:err})
    }
},


createComment: async (req,res) => {
    try{
        const newComment = await Comment.create(req.body)
        res.json(newComment)
    }
    catch(err){            
        console.log(err)
        res.status(400).json({message:'xxx Error(Comment Creation) XXX', error:err})
    }
},



// Update Method 
updateComment: async(req,res) => {
    try{
        const updatedComment  = await Comment.findOneAndUpdate({_id: req.params.id} , req.body ,{new:true, runValidators: true})
        console.log('XXXXXparamsxxxxxxx',request.params)
        res.json(updatedComment)
    }
    catch(err){
    console.log('we are here')
    console.log(err)
    res.status(500).json({message:'xxx Error(updating Comment) XXX', error:err})
    }
},

   // delete Method 
   deleteComment: async(req,res) => {
    try{
        console.log('XXXXXparamsxxxxxxx',request.params)
        const deleteComment = await Comment.deleteOne({_id:req.params.id})
        res.json(deleteComment)
    }
    catch(err){
        res.status(500).json({message:'xxxx Error(Delete Movie) XXXX', error:err})
    }
}


}