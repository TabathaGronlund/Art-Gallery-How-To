import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const CommentForm = (props) => {
    const navigate = useNavigate()
    const [Errors,setErrors] = useState({})
    const {allComments, setallComments} = props
    const [Comment,setComment] = useState({
        comment:'',
        style:'OilPaint'
    })

    const OnChangeHandler = (e) => {
        setComment({...Comment,[e.target.name]:e.target.value})
    }

    const OnSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/postComment', Comment)
            .then((res) => {
                setallComments([...allComments,res.data])
                navigate('/DisplayAllComments')
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return ( 
        <div>
            <form onSubmit={OnSubmitHandler} >
                <h3>Submit Comment</h3>
                <label className='form-label'>Style:</label>
                <select className="form-select" name="style" onChange={OnChangeHandler} value={Comment.style}>
                    <option value="OilPaint">OilPaint</option>
                    <option value="Graphite">Graphite</option>
                    <option value="AcrylicPaint">AcrylicPaint</option>
                    <option value="WaterColorPaint">WaterColorPaint</option>
                    <option value="Medias">Medias</option>
                    <option value="Pastel">Pastel</option>
                </select>
                <label className='form-label'>Comment:</label>
                <input className='form-control' type="text" onChange={OnChangeHandler} value={Comment.comment} name='comment' />
                <button className='btn btn-primary mt-4'> Add Comment </button>
            </form>
        </div>
    )

}
export default CommentForm