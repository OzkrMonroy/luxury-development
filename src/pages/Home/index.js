import React from 'react';
import { HomeConsumer } from '../../context/HomeContext'
import Spinner from '../../components/Spinner';
import SectionOne from './SectionOne';
import PortfolioSection from './PortfolioSection'
import ServicesSection from './ServicesSection';

const Home = () => {
  return (
    <HomeConsumer>
      {(value) => {
        // {if(!value.homeData) return <Spinner/>}
        return(
          <div>
            <div className="banner">
              <div className="card">
                <div className="banner-title">
                  <p>Luxuri</p>
                  <p>House</p>
                  <p>Shares</p>
                </div>
                <div className="banner-legend">
                  <p>Exceptional Contemporary Living</p>
                </div>
                <div className="divider"></div>
              </div>
              <div className="banner-image">
                {value.homeData ? <img src={value.homeData.banner.src} alt={value.homeData.banner.title}/>
                                : <Spinner/>
                }
              </div>
            </div>
            <main>
              <SectionOne/>
              {value.homeData ? <PortfolioSection datas={value.homeData.cards}/> : null}
              <ServicesSection/>
            </main>
          </div>
        )
      }}
      </HomeConsumer>
  );
}
 
export default Home;