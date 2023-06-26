const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({

    comment:{
        type: String,
        required: [true, 'Comment Cant Not Be Blank'],
    }, 
    style:{
        type:String,
        required: true,
        enum:{values: ['OilPaint', 'Graphite', 'AcrylicPaint', 'WaterColorPaint', 'Medias'], message:'Not listed Style'}
    },
    // user_id:{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User'
    // }
}, {timestamps:true})
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;