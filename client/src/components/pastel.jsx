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
      <button onClick={() => navigate(`/`)}>Home</button>




      <h1 className='foreground'>Pastels</h1>
      <h2>Pastels: Powdered pigments, soft texture. Intense colors,
        blendable. Expressive strokes, immediate results.
        Capturing light and texture. Luminous and tactile medium.
        Creativity unleashed.</h2>

      <div>
        <div>
          <h3>Types of Pastels:</h3>
          <p>Soft Pastels
            Hard Pastels<br></br>
            Oil Pastels<br></br>
            Chalk Pastels<br></br>
            Pan Pastels<br></br>
            Pastel Pencils<br></br>
            Water-soluble Pastels<br></br>
            Conte Crayons<br></br>
            CarbOthello Pastel Pencils<br></br>
            Inktense Pastels<br></br>
            Sanguine Pastels<br></br>
            Sepia Pastels<br></br>
            Metallic Pastels<br></br>
            Fluorescent Pastels<br></br>
            Tinted Charcoal Pastels<br></br>
            Dry Pastels<br></br>
            Wet Pastels<br></br>
            Handmade Pastels<br></br>
          </p>
        </div>
        <div>
          <h3>What you'll need:</h3>
          <p>
            •Graphite pencils (various grades)
            •Erasers (kneaded, vinyl, pencil)
            •Blending tools (stumps, tortillions, brushes)
            •Drawing paper/sketchbook
            •Drawing board/surface
            •Pencil sharpener/sandpaper
            •Ruler/straight edge
            •Reference images/subject
            •Optional: Fixative spray
            •Optional: Drawing accessories (table, easel, lightbox)
          </p>
        </div>
        <div>
          <h3>Suitable canvas:</h3>
          <p>Sanded pastel paper<br></br>
            Toned pastel paper<br></br>
            Pastel boards/panels with textured surface<br></br>
            Mixed media paper with tooth<br></br>
            </p>
        </div>
        <div className='youtube-bg'>

          <h2>Ready to Try?</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G-CY2pFjWug"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

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
      <button onClick={() => navigate(`/`)}>Home</button>
    </div>
  )
}
export default Pastel
