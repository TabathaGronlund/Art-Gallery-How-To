const CommentController = require('../controllers/comment.controller')
const {authenticate} = require('../config/jwt.config');
module.exports = app => {
    app.get('/api/allComments', CommentController.allComments)
    app.get('/api/oneComment/:id', CommentController.getOneComment)
    app.post('/api/postComment',  CommentController.createComment)
    app.put('/api/updateComment/:id', CommentController.updateComment)
    app.delete('/api/deleteComment/:id', CommentController.deleteComment)
}