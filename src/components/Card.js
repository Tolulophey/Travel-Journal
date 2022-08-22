// import React from 'react'
import location from '../images/location.png'


function Card(props) {
  
  return (
    <div className='card'>
        <div className="image">
          <img src={props.image} alt="image" />
        </div>
        <div className="location">
          <div className="top">
            <img src={location} alt="location-logo" />
            <p className='location'>{props.location}</p>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <div className="bottom">
            <p className="title">{props.title}</p>
            <p className="date">
              <span>{props.startDate}</span>
              <span>  -  </span>
              <span>{props.endDate}</span>
            </p>
            <p className="description">{props.description}</p>
          </div>
        </div>
    </div>
  )
}

export default Card