import React from 'react';

const Card = ({data, direction}) => {
  let rowDirection = direction % 2 !== 0 ? "inverse" : "normal"

  return (
    <div className={`card-large ${rowDirection}`}>
      <a href={data.link} className="card-image">
        <img src={data.img} alt={data.name}/>
        <div className="card-image-info">
          <p>{data.address}</p>
          <h2>{data.name}</h2>
        </div>
      </a>
      <div className="card-description">
        <p className="description">{data.description}</p>
        <ul className="list">

          {data.services.map((service, index) => (
            <li className="list-item" key={index}>
              <img src={`./img/${service.name}.svg`} alt="bed icon" className="list-item icon d-inline"/>
              <p className="d-inline">{service.description}</p>
            </li>
          ))}
          
        </ul>
        <a href={data.link} className="card-button">View</a>
      </div>
    </div>
  );
}
 
export default Card;