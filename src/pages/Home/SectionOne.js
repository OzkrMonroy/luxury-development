import React from 'react';

const SectionOne = () => {

  const mosaicoClases = ["horizontal", "vertical","horizontal", "vertical","horizontal", "vertical","horizontal", "vertical","horizontal", "vertical","horizontal", "vertical"]

  return (
    <section className="section-one">
      <div className="mosaico-container">
        {mosaicoClases.map((clase, index) => (
          <div className="mosaico-item" key={index}>
            <div className={clase}></div>
          </div>
        ))}
      </div>

      <div className="information-section-one">
        <div className="information-container">
          <h2 className="information-title">our expertise</h2>
          <p className="information-text">RJ Investments bringes luxury living to the rental market through bespoke renovations, at affordable prices with quality property management</p>
        </div>
      </div>
    </section>
  );
}
 
export default SectionOne;