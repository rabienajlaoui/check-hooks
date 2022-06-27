import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Details = ({movies}) => {
    const {title} = useParams ()
    const mov = movies.find((el)=>el.title===title)
  return (
    <div style={{textAlign:'center',backgroundColor:'#d6d6d6'}}>
    <iframe style={{paddingTop:'70px'}}  width="853" height="480"  src={mov.trailer} title="YouTube video player" frameborder="0"  display='block'  allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div style={{color:'red',fontSize:'x-large',textAlign:'center',fontWeight:'bold'}}>DESCRIPTION :</div> 
    <div style={{fontSize:'large',margin:'30px'}}>{mov.description}</div>
    <Link to={`/`}>
    <button className="btn btn-danger" style={{color:'white',backgroundColor:'#0d6efd', fontSize:'X-large'}}>Back Home</button>
    </Link>
    </div>
  )
}

export default Details