import React, { useEffect } from 'react';

import PortfolioProvider, { PortfolioConsumer } from '../../context/PortfolioContext'
import Card from '../../components/Card';
import Spinner from '../../components/Spinner';

const Portfolio = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PortfolioProvider>
      <div className="portfolio-page">
        <section className="banner portfolio-container">
          <h1>The Portfolio</h1>
          <p>View our completed builds</p>
        </section>
        <section className="card-container">
          <PortfolioConsumer>
          {(value) => {
            return (
              <div className="portfolio-container">
                {value.portfolioData ? 
                  value.portfolioData.map((data, index) => (
                    <Card data={data} key={index} direction={index}/>
                  ))
                  : <Spinner/>
                }
              </div>
            )
          }}
          </PortfolioConsumer>
        </section>
        <section className="lets-talk">
          <a className="message-container" href="#!">
            <h2>Let's Talk</h2>
            <p>We may have the perfect home or investment for you</p>
          </a>
        </section>
      </div>
    </PortfolioProvider>
  );
}
 
export default Portfolio;