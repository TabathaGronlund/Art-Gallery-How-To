//this will hold the videos and information
import { useNavigate, Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from 'axios'


const WatercolorPaint = (props) => {
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

      <h1 className='foreground'>Water Color</h1>



      <h2>Water Color Comment</h2>
      {
        allComments.map((comment) => (
          <tr key={comment._id}>
            {
              comment.style === "WaterColorPaint" ?
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

      <p>Watercolors: Translucent and flowing, they create
         an ethereal world of delicate beauty. With pigments
          suspended in a water-soluble binder, they blend and
           layer effortlessly. The transparency allows for soft
            washes and seamless gradients. Watercolors capture light
            , evoke emotions, and invite us into the realm of
             imagination and art.</p>

    </div>
  )
}

export default WatercolorPaint
