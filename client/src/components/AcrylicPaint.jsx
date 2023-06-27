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

      {/* <h2>AcrylicPaint Comment</h2> */}

      <button onClick={() => navigate(`/`)}>home</button>
      <h2 className='foreground'>Acrylic Paint</h2>
      <p><strong>Acrylic paints:</strong> Versatile, water-based. Quick-drying,
        vibrant colors. Adheres to various surfaces.<br></br> Translucent washes
        or opaque layers. Easy cleanup. Freedom to explore and create.</p>

      <h3>Types of acrylics:</h3>
      <p>
        <strong>Heavy Body Acrylics:</strong> Thick consistency, retains brushstrokes.
        <br></br>
        <strong>Fluid Acrylics:</strong> Thin consistency, good for pouring and glazing.
        <br></br>
        <strong>Soft Body Acrylics</strong>: Creamy consistency, easy to blend.
        <br></br>
        <strong>Open Acrylics:</strong> Longer drying time, allows for reworking.
        <br></br>
        <strong>Acrylic Ink:</strong> Highly pigmented, fluid for drawing and calligraphy.
        <br></br>
        <strong>High Flow Acrylics:</strong> Ultra-thin consistency, ideal for detail work and airbrushing.
        <br></br>
        <strong>Acrylic Gouache:</strong> Matte finish, fast-drying like acrylics.
        <br></br>
        <strong>Interference Acrylics:</strong> Create iridescent or metallic effects.
        <br></br>
        <strong>Metallic Acrylics:</strong> Reflective, metallic finish.
        <br></br>
        <strong>Acrylic Paint Markers:</strong> Pens filled with acrylic paint for precision.
      </p>
      <br></br>
      <h3>What you'll need:</h3>
      <ul>
        •Acrylic paint
        •Brushes
        •Palette
        •Palette knife
        •Canvas or painting surface
        •Easel or sturdy surface
        •Water and palette cup•
      </ul>
      <div>
        <h3>Suitable canvas:</h3>
        <p>
          Acrylic Paper
          <br></br>
          Mixed Media Paper
          <br></br>
          Watercolor Paper (specific types suitable for acrylics)
          <br></br>
          Canvas Paper
          <br></br>
          Primed Masonite or Hardboard Panels
        </p>
      </div>
      <div className='youtube-bg'>
        <h2>Ready to Try?</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_UoPz5pnKQY"
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <Link to={`/CommentForm`}><button>Add New Comment</button></Link>
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
      <div>
      </div>
    </div>
  )
}

export default AcrylicPaint
