import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Logo from '../img/logo 2 (1).png';
import FbLogo from '../img/fb.png';
import LIn from '../img/LinkedIn.png';
import TwLogo from '../img/tweet.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useHistory
} from "react-router-dom";

class Footer1 extends Component {
  render() {
    return (<>
      <section className="footer-cs">
        <div className="myContainer">
          <div className="row ">
            <div className="col-md-3 mt-5 mb-5">
              <Fade left>
                <div className="row">
                  <div className="col-md-12 product-heading-cs">
                    <ul>
                      <li><h5>Learn more</h5></li>
                    </ul>
                  </div>
                  <div className="col-md-12 Products-cs">
                    <ul>
                      <li><a href="">Individuals</a></li>
                      <li><a href="">Photographers</a></li>
                      <li><a href="">Marketing</a></li>
                      <li><a href="">Developers</a></li>
                      <li><a href="">Ecommerce</a></li>
                      <li><a href="">Media</a></li>
                      <li><a href="">Car Dealerships</a></li>
                      <li><a href="">Pricing</a></li>
                    </ul>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-md-3  col-margin-cs ">
              <Fade right>
                <div className="row">
                  <div className="col-md-12 product-heading-cs">
                    <ul>
                      <li><h5>Tools & API</h5></li>
                    </ul>
                  </div>
                  <div className="col-md-12 Products-cs">
                    <ul>
                      <li><a href="">API Documentation</a></li>
                      <li><a href="">Photoshop Extension</a></li>
                      <li><a href="">Windows / Mac / Linux</a></li>
                      <li><a href="">Change Image Background</a></li>
                      <li><a href="">Product Photo Optimizer</a></li>
                      <li><a href="">Car Photo Optimizer</a></li>
                      <li><a href="">Party Pic Maker</a></li>
                      <li><a href="">Fashion Photo Creator</a></li>
                      <li><a href="">Easter Greeting Card</a></li>
                    </ul>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-md-3  col-margin-cs ">
              <Fade left>
                <div className="row">
                  <div className="col-md-12 product-heading-cs">
                    <ul>
                      <li><h5>Tools & API</h5></li>
                    </ul>
                  </div>
                  <div className="col-md-12 Products-cs">
                    <ul>
                      <li><a href="">Help & FAQs</a></li>
                      <li><a href="">Contact us</a></li>
                      <li><a href="">Refunds</a></li>
                      <li><a href="">Platform Status</a></li>
                    </ul>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="col-md-3  col-margin-cs ">
              <Fade right>
                <div className="row">
                  <div className="col-md-12 product-heading-cs">
                    <ul>
                      <li><h5>Company</h5></li>
                    </ul>
                  </div>
                  <div className="col-md-12 Products-cs">
                    <ul>
                      <li><a href="">Blog</a></li>
                      <li><a href="">Affiliate Program</a></li>
                      <li><a href="">Video Background Removal <span className="badge badge-danger">New</span> </a></li>
                      <li><a href="">Careers</a></li>
                      <li><a href="">About us</a></li>
                    </ul>
                  </div>

                  <div className="col-md-12 p-0">
                    <button className="btn btn-secondary btn-sm btn-footer"><i className="fa fa-facebook"></i></button>
                    <button className="btn btn-secondary btn-sm btn-footer"><i className="fa fa-instagram"></i></button>
                    <button className="btn btn-secondary btn-sm btn-footer"><i className="fa fa-twitter"></i></button>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <Fade bottom>
            <div className='myContainer'>
              <div className="row mt-5 pb-2">
                <div className="col-md-6">

                  <div className="dropdown">
                    <button className="btn btn-lang dropdown-toggle pr-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-globe"></i> English
      </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">FR</a>
                      <a className="dropdown-item" href="#">IT</a>
                      <a className="dropdown-item" href="#">ES</a>
                      <a className="dropdown-item" href="#">EN</a>
                      <a className="dropdown-item" href="#">DE</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-right">
                  <ul className="footer-corner-ul">
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">General Terms and Conditions</a></li>
                    <li><a href="">Imprint</a></li>

                  </ul>
                </div>
              </div>
            </div>

          </Fade>
        </div>
      </section>
      {/* <React.Fragment>
                <div className="foot-div1 footer_Box">
                <img src={Logo} alt="Site Logo" className="footer_logo" />
                <div className="footerNav">
                <Link to="/" className="foot_Font">About</Link>
                <Link to="/contactus" className="foot_Font">Contact Us</Link>
                <Link to="/blog" className="foot_Font">Blog</Link>
                <Link to="/" className="foot_Font">Faqs</Link>
                <Link to="/" className="foot_Font">Terms & Conditions</Link>
                <Link to="/" className="foot_Font">Privacy Policy</Link>
            
                </div>
                <div className="footerNav">
                <img src={FbLogo} alt="Fb Logo" className="match-title_min p-3" />
                                    <img src={LIn} alt="LinkedIn Logo" className="match-title_min p-3" />
                                    <img src={TwLogo} alt="Twitter Logo" className="match-title_min p-3" />
                                
                </div>
                   <p className="foot_Font mt-4" >Copyright © 2020 MagicRemove</p>
                    </div>
            </React.Fragment>
           
           */ }
    </>
    );
  }
}

export default Footer1;