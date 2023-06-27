import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from "react-router-dom";


const SingleComment = (props) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [Comment, setComment] = useState({})
    const [temUser, settemUser] = useState()
    const [idmatch,setidmatch] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneComment/${id}`,)
            .then((res) => {
                setComment(res.data)

            })
            .catch((err) => {
                console.log(err)
                // navigate('/')
            })
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteComment/${id}`)
            .then((res) => {
                navigate('/DisplayAllComments')
            })
            .catch((err) => {
                console.log(err);
            })
    }



return (
    <div>
        <h1>Comment <br></br> Delete</h1>
        <p>Comment: {Comment.comment}</p>
        <p>Style: {Comment.style}</p>
        <p>Posted At: {Comment.updatedAt}</p>
        <button onClick={deleteHandler}>Clear Comment</button>
    </div>
)}


export default SingleComment