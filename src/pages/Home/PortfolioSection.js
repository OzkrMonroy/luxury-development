import React from 'react';
import { Link } from 'react-router-dom'

const PortfolioSection = ({datas}) => {
  
  return (
    <section className="portafolio-section">
      <div className="card-portafolio-section">

        {datas.map((data, index) => (
          <Link to={data.link} className="card" key={index}>
            <img className="card-image" src={data.img} alt={data.alt}/>
            <div className="card-body">
              <div className="card-title">
                <h2>{data.title}</h2>
              </div>
              <div className="card-container">
                <p>{data.info}</p>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}
 
export default PortfolioSection;