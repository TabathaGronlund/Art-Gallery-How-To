import { useNavigate, Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from 'axios'


const Medias = (props) => {
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

      <div className='flex-img-oil'>
        <h1>Famous Oil paintings</h1>
        <div><p>Mona Lisa</p><img src="/art-img/mona-lisa.png" alt="Mona Lisa" /></div>
        <div><p>The Girl With The Pearl Earrings</p><img src="/art-img/girl-with-pearl-earrings.png" alt="girl with pearl earrings" /></div>
        <div><p>The Kiss</p><img src="/art-img/the-kiss.png" alt="the kiss" /></div>
        <div><p>Starry Night</p><img src="/art-img/starry-night.png" alt="starry night" /></div>
      </div>
      <div className='flex-img-acrylic'>
      <img src="" alt=""/>
      <img src="" alt=""/>
      <img src="" alt=""/>
      <img src="" alt=""/>
      </div>
      <div className='flex-img-graphite'>
      <img src="" alt=""/>
      <img src="" alt=""/>
      <img src="" alt=""/>
      <img src="" alt=""/>
      </div>

      <Link to={`/CommentForm`}><button>Add New Comment</button></Link>
      {
        allComments.map((comment) => (
          <tr key={comment._id}>
            {
              comment.style === "Medias" ?
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

export default Medias
