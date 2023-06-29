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
      <button onClick={() => navigate(`/`)}>Home</button>

      <h1 className='foreground'>Water Color</h1>




      <h3>Watercolors: Translucent and flowing, they create
        an ethereal world of delicate beauty. With pigments
        suspended in a water-soluble binder, they blend and
        layer effortlessly. The transparency allows for soft
        washes and seamless gradients. Watercolors capture light
        , evoke emotions, and invite us into the realm of
        imagination and art.</h3>
      <div>
        <div>
          <h3>Types of Watercolor:</h3>
          <p>
            Tube watercolors<br></br>
            Pan watercolors<br></br>
            Liquid watercolors<br></br>
            Watercolor pencils<br></br>
            Watercolor sticks<br></br>
            Watercolor markers<br></br>
            Liquid watercolor inks<br></br>
          </p>
        </div>
        <div>
          <h3>What you'll need:</h3>
          <p>
            •Watercolor paints •watercolor brushes• watercolor paper• palette• water container• masking tape• pencil• eraser• paper towels• palette knife• optional: masking fluid, spray bottle, sealant/fixative•
          </p>
        </div>
        <div>
          <h3>Suitable canvas:</h3>
          <p>
            Watercolor painting is traditionally done on paper rather than canvas.
            The texture and absorbency of watercolor paper allow for better control
            of the watercolor pigments and techniques such as washes and blending.
            However, if you prefer working on a canvas-like surface for watercolor
            painting, you can use a specially designed watercolor canvas or canvas pad.
          </p>
        </div>
        <div className='youtube-bg'>
          <h2>Here is a short guide:</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eEXfQKabQGI"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <h2>Ready to Try?</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VfVcG7FQWfI" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
      </div>

      <Link to={`/CommentForm`}><button>Add New Comment</button></Link>
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
            <button onClick={() => navigate(`/`)}>Home</button>

    </div>
  )
}

export default WatercolorPaint
