import React from 'react';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">

        <a href="#!" className="services-items border-right">
          <div className="item-img">
            <img src="./img/package.svg" alt="package icon" />
          </div>
          <div className="item-title">
            <h2>Investments Options</h2>
          </div>
          <div className="item-content">
            <p>Get More</p>
          </div>
        </a>

        <a href="#!" className="services-items border-right">
          <div className="item-img">
            <img src="./img/accommodation.svg" alt="accommodation icon"/>
          </div>
          <div className="item-title">
            <h2>Accommodation</h2>
          </div>
          <div className="item-content">
            <p>Future Tenants</p>
          </div>
        </a>
        
        <a href="#!" className="services-items">
          <div className="item-img">
            <img src="./img/development.svg" alt="land icon"/>
          </div>
          <div className="item-title">
            <h2>Land Development</h2>
          </div>
          <div className="item-content">
            <p>Meet Pandora Homes</p>
          </div>
        </a>
      </div>
    </section>
  );
}
 
export default ServicesSection;