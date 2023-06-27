//this will hold the videos and information
import { useNavigate, Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from 'axios'


const AcrylicPaint = (props) => {
  const { allComments, setallComments } = props
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:8000/api/allComments')
      .then((allComments) => {
        setallComments(allComments.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className='how-to-container'>
      <button onClick={() => navigate(`/`)}>home</button>

      <h1 className='foreground'>AcrylicPaint</h1>







      <h2>AcrylicPaint Comment</h2>
      {
        allComments.map((comment) => (
          <tr key={comment._id}>
            {
              comment.style === "AcrylicPaint" ?
                <>
                  <td>{comment.comment}</td>
                  <td>{comment.style}</td>
                </>
                :
                null
            }
          </tr>
        ))
      }
      <Link to={`/CommentForm`}><button>Add New Comment</button></Link>
    </div>
  )
}

export default AcrylicPaint
