//this will hold the videos and information
import { useNavigate, Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from 'axios'


const Graphite = (props) => {
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

      <h1 className='foreground'>Graphite</h1>
      <h3>Graphite: Versatile pencil medium.
        Creates precise lines, tonal shading. Captures details,
        textures, and light. Accessible and expressive.</h3>
      <div>
        <div>
          <h3>Types of Graphite:</h3>
          <p>
            Graphite pencils<br></br>
            Graphite sticks<br></br>
            Mechanical pencils<br></br>
            Water-soluble graphite<br></br>
            Graphite powder<br></br>
            Graphite blocks <br></br>
            Powdered graphite pencils
          </p>
        </div>
        <div>
          <h3>What you'll need:</h3>
          <p>
            •Graphite pencils• drawing paper• erasers• blending tools• pencil sharpener• ruler (optional)• fixative (optional)•
          </p>
        </div>
        <div>
          <h3>Suitable canvas:</h3>
          <p>For graphite art, a suitable canvas is not typically used.
            Graphite drawings are commonly done on specialized drawing
            papers or sketchbooks rather than canvas. The texture and
            weight of the paper are important considerations for achieving
            the desired effects with graphite. Therefore, artists often
            choose smooth and sturdy drawing papers or sketchbooks specifically
            designed for graphite drawings. Canvas is more commonly associated
            with painting mediums like acrylics or oils.</p>
        </div>
        <div className='youtube-bg'>
          <h2> Understanding pencil grades</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8IM05ZpBueo"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
           clipboard-write; encrypted-media; gyroscope; picture-in-picture;
           web-share" allowfullscreen></iframe>
          <h2>Ready to Try?</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jQ6yJZdwgyk"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" allowfullscreen></iframe>

        </div>
      </div>

      <Link to={`/CommentForm`}><button>Add New Comment</button></Link>
      {
        allComments.map((comment) => (
          <tr key={comment._id}>
            {
              comment.style === "Graphite" ?
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

    </div>
  )
}

export default Graphite
