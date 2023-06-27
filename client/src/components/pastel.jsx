//this will hold the videos and information
import { useNavigate, Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from 'axios'


const Pastel = (props) => {
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

      <h1 className='foreground'>Pastel</h1>



      <h1 className='foreground'>Pastels</h1>
      <p>Pastels: Powdered pigments, soft texture. Intense colors,
        blendable. Expressive strokes, immediate results.
        Capturing light and texture. Luminous and tactile medium.
        Creativity unleashed.</p>

      <div>
        <div>
          <h3>Types of Watercolor:</h3>
          <p>

          </p>
        </div>
        <div>
          <h3>What you'll need:</h3>
          <p>
          </p>
        </div>
        <div>
          <h3>Suitable canvas:</h3>
          <p></p>
        </div>
        <div className='youtube-bg'>

          <h2>Ready to Try?</h2>

        </div>
      </div>

      {
        allComments.map((comment) => (
          <tr key={comment._id}>
            {
              comment.style === "Pastel" ?
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
export default Pastel
