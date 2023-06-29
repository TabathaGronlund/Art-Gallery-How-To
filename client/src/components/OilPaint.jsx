//this will hold the videos and information
import { useNavigate, Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from 'axios'


const OilPaint = (props) => {
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


      <h1 className='foreground'>Oil Paint</h1>
      <h3 className='explain-media'>Oil paints: Pigments suspended in oil. Vibrant, versatile, slow-drying.
        Blendable, rich colors. Depth and luminosity. Layer, glaze, create textures.
        Lasting durability. Artistic expression brought to life.</h3>
      <div>
        <h3>Types of oil paints:</h3>
        <p>
          Linseed Oil Paint<br></br>
          Walnut Oil Paint<br></br>
          Poppy Seed Oil Paint<br></br>
          Safflower Oil Paint<br></br>
          Stand Oil Paint<br></br>
          Drying Oil Paint<br></br>
          Alkyd Oil Paint<br></br>
          Water-Mixable Oil Paint<br></br>
        </p>
      </div>
      <div>
        <h3>What you'll need:</h3>
        <p>
          •Oil paints •brushes• canvas• palette• palette knife• medium• solvent• easel• rags/paper towels• varnish•
        </p>
      </div>
      <div>
        <h3>Suitable canvas:</h3>
        <p>
          Primed, stretched, cotton/linen, medium weight, acid-free, (reputable brands)
        </p>
      </div>
      <div className='youtube-bg'>
        <h2>Ready to Try?</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fgWdMsAXSXg"
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
          clipboard-write; encrypted-media; gyroscope;
           picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className='one-to-end'>
        <p>
          <h3>Oil painting is a versatile and rewarding artistic medium. Here's a step-by-step guide on how to use oil paints:</h3><br></br>

          <strong>Set up your workspace:</strong> Choose a well-ventilated area with good lighting. Cover your work surface with a protective sheet or newspaper to prevent any spills or stains.<br></br>

          <strong>Prepare your canvas:</strong> If using a stretched canvas, ensure it is clean and free from dust or debris. If necessary, apply a coat of gesso or primer to create a smooth, even surface. Allow it to dry before proceeding.<br></br>

          <strong>Select your colors:</strong> Choose the oil paint colors you want to work with. Squeeze a small amount of each color onto your palette, leaving enough space for mixing.<br></br>

          <strong>Mix your colors:</strong> Use a palette knife to mix and blend the colors on your palette. Experiment with different combinations to achieve your desired hues and values. Start with lighter colors and gradually work towards darker ones.<br></br>

          <strong>Thin the paint:</strong> Depending on your desired effect, you may need to thin the paint with a painting medium or solvent. Mix a small amount of medium into your paint to achieve a smoother consistency or to increase transparency.<br></br>

          <strong>Start painting:</strong> Begin by sketching the outlines of your composition lightly with a pencil or a brush. Then, gradually build up your painting by layering colors and adding details. Start with broad strokes and gradually refine the details as you progress.<br></br>

          <strong>Work from background to foreground:</strong> Typically, it is advisable to work from the background towards the foreground. This helps create depth and allows for easier blending and layering.<br></br>

          <strong>Drying time:</strong> Keep in mind that oil paints have a longer drying time compared to other mediums. Be patient and allow each layer to dry completely before adding subsequent layers or making any significant changes.<br></br>

          <strong>Clean your brushes:</strong> Clean your brushes with a solvent or cleaning agent specifically designed for oil paints. Remove excess paint and wash them thoroughly with soap and water. Properly store your brushes to maintain their shape.<br></br>

          <stong>Varnish your finished painting:</stong> Once your artwork is fully dry (usually after several weeks or months), consider applying a protective varnish to enhance the colors and protect the surface. Follow the instructions provided by the specific varnish product.<br></br>

          Remember, oil painting is a journey of experimentation and practice. Embrace the process, explore different techniques, and enjoy the creative possibilities that oil paints offer.</p>
      </div>

      <Link to={`/CommentForm`}><button>Add New Comment</button></Link>
      {
        
        allComments.map((comment) => (
          <tr key={comment._id}>
            {
              comment.style === "OilPaint" ?
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
export default OilPaint
