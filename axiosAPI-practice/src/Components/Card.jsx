import React from 'react'

const Card = ({movieData}) => {
    const {Poster,imdbID}=movieData;
  return (
    <div>
        <li className='hero-container'>
            <div className='mainposter'>
                <div className='poster-container'>
                    <img src={Poster} className='poster' alt="imdbID" />
                </div>
                <div className='ticket-container'>
                    <div className='ticket-content'>
                        <a href={`/movie/${imdbID}`}>
                            <button className='ticket-buy-btn'>Watch now</button>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    </div>
  )
}

export default Card