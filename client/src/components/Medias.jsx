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
    <div className='how-to-container length-down'>

      <button onClick={() => navigate(`/`)}>Home</button>
      <h1 className='foreground'>Famous Mediums</h1>
      <div className='flex-img-oil'>
        <h1>Famous Oil paintings</h1>
        <div><p>Mona Lisa</p><img src="/art-img/mona-lisa.png" alt="Mona Lisa" /></div>
        <div><p>The Girl With The Pearl Earrings</p><img src="/art-img/girl-with-pearl-earrings.png" alt="girl with pearl earrings" /></div>
        <div><p>The Kiss</p><img src="/art-img/the-kiss.png" alt="the kiss" /></div>
        <div><p>Starry Night</p><img src="/art-img/starry-night.png" alt="starry night" /></div>
      </div>
      <div className='flex-img-acrylic'>
        <h1>Famous Acrylic Paintings</h1>
      <div><p>Campbells Soup Cans</p><img src="/art-img/campbells-soup-cans-andy-warhol.png" alt="andy warhol"/></div>
      <div><p>Fancy Feathers</p><img src="/art-img/fancy-feathers.png" alt="bird"/></div>
      <div><p>Mr and Mrs Clark</p><img src="/art-img/Mr-and-Mrs-Clark.png" alt="mr and mrs clark"/></div>
      <div><p>Letting Go</p><img src="/art-img/letting-go.png" alt="let go"/></div>
      </div>
      <div className='flex-img-graphite'>
        <h1>Graphite Drawings</h1>
      <div><p>Bear and Bunny</p><img src="/art-img/bear-and-bunny.png" alt="bear and bunny"/></div>
      <div><p>Eye</p><img src="/art-img/eye.png" alt="eye"/></div>
      <div><p>Sensazioni</p><img src="/art-img/sensazioni.png" alt="sensazioni"/></div>
      <div><p>From Flesh</p><img src="/art-img/from-flesh.png" alt="from flesh"/></div>
      </div>
      <div className='flex-img-watercolor'>
        <h1>Famous Watercolor Paintings</h1>
      <div><p>Place De Diaghilve</p><img src="/art-img/place-de-diaghilve.png" alt="place de"/></div>
      <div><p>Lake Geneva</p><img src="/art-img/lake-geneva.png" alt="lake geneva"/></div>
      <div><p>La Marie Dieu Doublant</p><img src="/art-img/La-Marie-Dieu-doublant-la-pointe.png" alt="la marie"/></div>
      <div><p>Brown</p><img src="/art-img/brown.png" alt="brown"/></div>
      </div>
      <div className='flex-img-pastel'>
        <h1>Famous Pastel Drawings</h1>
      <div><p>Poppies</p><img src="/art-img/poppies-isles-of-shoals.png" alt="poppies"/></div>
      <div><p>Self Portrait</p><img src="/art-img/Self-Portrait.png" alt="self portrait"/></div>
      <div><p>Watering Horses</p><img src="/art-img/watering-horses.png" alt="watering horses"/></div>
      </div>
      <div className='video-bg'>
        <h2 className='foreground'> Brush Information</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/m4gF_p-GQ2I" 
        title="YouTube video player" frameborder="0" allow="accelerometer;
         autoplay; clipboard-write; encrypted-media; gyroscope;
          picture-in-picture; web-share" allowfullscreen></iframe>
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
            <button onClick={() => navigate(`/`)}>Home</button>

    </div>
  )
}

export default Medias
