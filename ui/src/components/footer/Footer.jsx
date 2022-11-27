import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
const Footer = () => {
  return (
    <footer className="mainfooter" role="contentinfo">
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            {/*Column1*/}
            <div className="footer-pad">
              <h4>Shop Information</h4>
              <ul className="list-unstyled">
                <li><Link to='#' /><Link/></li>
                <li><Link to='#'>Payment Center</Link></li>
                <li><Link to='#'>Contact Directory</Link></li>
                <li><Link to='#'>Forms</Link></li>
                <li><Link to='#'>News and Updates</Link></li>
                <li><Link to='#'>FAQs</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            {/*Column1*/}
            <div className="footer-pad">
              <h4>About Shop</h4>
              <ul className="list-unstyled">
                <li><Link to='#'>Website Tutorial</Link></li>
                <li><Link to='#'>Accessibility</Link></li>
                <li><Link to='#'>Disclaimer</Link></li>
                <li><Link to='#'>Privacy Policy</Link></li>
                <li><Link to='#'>FAQs</Link></li>
                <li><Link to='#'>Webmaster</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            {/*Column1*/}
            <div className="footer-pad">
              <h4>Our Relations</h4>
              <ul className="list-unstyled">
                <li><Link to='#'>Parks and Recreation</Link></li>
                <li><Link to='#'>Public Works</Link></li>
                <li><Link to='#'>Police Department</Link></li>
                <li><Link to='#'>Fire</Link></li>
                <li><Link to='#'>Mayor and City Council</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <h4>Follow Us</h4>
            <ul className="social-network social-circle">
              <li><Link to='#' className="icoFacebook" title="Facebook"><i className="fa fa-facebook" /></Link></li>
              <li><Link to='#' className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin" /></Link></li>
            </ul>				
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 copy">
            <p className="text-center">© Copyright 2022 - Shopping HUB.  All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer