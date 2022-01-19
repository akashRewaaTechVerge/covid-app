import React from 'react'

import contactImg from '../../images/corona.png'
import submit from '../../images/submit.png'
import { FaClock, FaFacebookF, FaInstagram, FaLocationArrow, FaWhatsapp } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { IoMdCall } from 'react-icons/io'
import Pager from '../Pager/Pager'
import './MainStreet.css'
const MainStreet = () => {
    return (
        <div>
            <Pager pageTitle="MainStreet" bigTitle="Get Tested Safely For Free Today" isRed={true} imgBanner={contactImg} height="600px" left="20%" />
            <section className="page-content">
                <div className="container">
                    <div className="contact-page">
                        <div className="contact-head-mainStreet">
                            <div className='main-title'>Are you looking to ensure the health and safely of  <br /> you and everyone around you?</div>
                            <p>Get Tested Safely For Free Today</p>
                        </div>
                        {/* <!--contact-head end--> */}
                        <div className="contact-main">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="main_street-contact_info">
                                        <h3 className="main-street-sub-title white">Contacts</h3>
                                        <ul className="main-street-cl-list">
                                            <li>
                                                <span className="main-street-ci-icon">
                                                    <i><FaLocationArrow size={25} /></i>
                                                </span>
                                                <p>8225 E. Main Street
                                                    Ridgeland, SC 29936</p>
                                            </li>
                                            <li>
                                                <span className="main-street-ci-icon">
                                                    <i><FaClock size={25} /></i>
                                                </span>
                                                <p><span>Mon-Fri:</span> 9
                                                    am - 6 pm <span>Saturday:</span> 9 am - 3 pm</p>
                                            </li>
                                            <li>
                                                <span className="main-street-ci-icon">
                                                    <i><HiMail size={25} /></i>
                                                </span>
                                                <p>FreeCOVIDTestSpot@gmail.com</p>
                                            </li>
                                            <li>
                                                <span className="main-street-ci-icon">
                                                    <i><IoMdCall size={25} /></i>
                                                </span>
                                                <p>(843)895-4058</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="contact-main-form">
                                        <form method="post" action="#" id="contact-form">
                                            <div className="response"></div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" name="name" className="form-control name" placeholder="Daniel" />
                                                    </div>
                                                    {/* <!--form-group end--> */}
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label>What city are you from?</label>
                                                        <select className="form-control">
                                                            <option>Los Angeles</option>
                                                            <option>Los Angeles</option>
                                                            <option>Los Angeles</option>
                                                            <option>Los Angeles</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--form-group end--> */}
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label>E-mail</label>
                                                        <input type="email" name="email" className="form-control email" placeholder="Example@gmail.com" />
                                                    </div>
                                                    {/* <!--form-group end--> */}
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label>Phone Number</label>
                                                        <input type="text" name="name" className="form-control" placeholder="44 20 7700 0055" />
                                                    </div>
                                                    {/* <!--form-group end--> */}
                                                </div>
                                                <div className="col-sm-10">
                                                    <div className="form-group">
                                                        <label>Message</label>
                                                        <textarea className="form-control" placeholder="Hello! I have this question..."></textarea>
                                                    </div>
                                                    {/* <!--form-group end--> */}
                                                </div>
                                                <div className="col-sm-2">
                                                    <div className="form-submit">
                                                        <button type="button" id="submit"><img src={submit} alt="" /></button>
                                                    </div>
                                                    {/* <!--form-submit end--> */}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <!--contact-main-form end--> */}
                                </div>
                            </div>
                        </div>
                        {/* <!--contact-main end--> */}
                        {/* <div className="contact-social">
                            <span>Subscribe to our social networks :</span>
                            <ul className="social-links without-bg">
                                <li><a href="#" title=""><i><FaWhatsapp /></i></a></li>
                                <li><a href="#" title=""><i><FaInstagram /></i></a></li>
                                <li><a href="#" title=""><i><FaFacebookF /></i></a></li>
                            </ul>
                        </div> */}
                        {/* <!--contact-social end--> */}
                    </div>
                    {/* <!--contact-page end--> */}
                </div>
            </section>
            {/* <!--page-content end--> */}
        </div>
    )
}

export default MainStreet
