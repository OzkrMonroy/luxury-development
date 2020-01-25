import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section className="contact-section">

        <div className="contact-information">
          <div className="email-phone-contact">
            <p>49889383</p>
            <p>ozkrmonroy65@gmail.com</p>
          </div>
          <div className="social-contact">
            <a href="www.facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="www.twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="www.instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="contact-footer">
          <div className="copyright">
            <p>2016 RJ Investments</p>
          </div>
          <div className="icon-footer">
            <img src="./img/footer-logo.svg" alt="footer-logo"/>
          </div>
          <div className="credits">
            <p>Development by Ozkr</p>
          </div>
        </div>
      </section>
      <div className="footer-info">
        <p>RJ Investments Limited nor any of their affiliates or companies provides any advice or recommendations in relation to this website. The investment information provided throughout this website is not intended to be and should not be relied upon as either financial investment advice, legal advice or otherwise. This information is general information about the property investments offered by RJ Investments Limited and we would always advise you to take independent specialist advice from appropriately qualified persons before making any decision to invest. All investments in property carry risk and investments are only available to certain specified persons who are sophisticated enough to understand the risks.</p>
      </div>
  </footer>
  );
}
 
export default Footer;