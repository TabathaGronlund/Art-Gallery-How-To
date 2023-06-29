import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditingCommentForm = (props) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [Errors, setErrors] = useState({})
    const { allComments, setallComments } = props
    const [Comment, setComment] = useState({
        comment: '',
        style: 'OilPaint'
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneComment/${id}`,)
            .then((res) => {
                setComment(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])



    const OnChangeHandler = (e) => {
        setComment({ ...Comment, [e.target.name]: e.target.value })
    }

    const OnSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateComment/${id}`, Comment)
            .then((res) => {
                // setallComments([...allComments,res.data])
                navigate('/DisplayAllComments')
            })
            .catch((err) => {
                setErrors(err.response.data.error.errors)
            })

    }

    return (
        <div>
            <button onClick={() => navigate(`/`)}>Home</button>

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
                {
                    Errors.comment ?
                        <p className="text-danger">{Errors.comment.message}</p> :
                        null
                }
                <button className='btn btn-primary mt-4'> Add Comment </button>
            </form>
            <button onClick={() => navigate(`/`)}>Home</button>

        </div>
    )

}
export default EditingCommentForm