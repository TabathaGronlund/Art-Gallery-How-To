import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from "react-router-dom";


const DisplayAllComments = (props) => {
    const { allComments, setallComments } = props
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        axios.get('http://localhost:8000/api/allComments')
            .then((allComments) => {
                setallComments(allComments.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    //  when passing e need to change E to varios match the axios
    const deleteHandler = (id) => {
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
            <>
                <h2>Display All Comments</h2>
                <Link to={`/CommentForm`}>Add New Comment</Link>
                <Link to={`/`}>Back To Home</Link>
            </>

            <table className="table table-bordered">
                <thead >
                    <tr>
                        <th>Comment</th>
                        <th>Art Style</th>
                        <th>Posted At</th>
                        <th>Acction</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allComments.map((comment) => (
                            <tr key={comment._id}>
                                <td>{comment.comment}</td>
                                <td>{comment.style}</td>
                                <td className="d-flex justify-content-evenly">
                                <Link to={`/CommentDetail/${comment._id}`}>Delete</Link> <br></br>
                                <Link to={`/EditingCommentForm/${comment._id}`}>Edit</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayAllComments