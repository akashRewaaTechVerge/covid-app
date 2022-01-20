import React from 'react'
import './WarrenAve.css'
import contactImg from '../../images/nus.png'
import { FaClock, FaLocationArrow } from 'react-icons/fa'
import { HiMail} from 'react-icons/hi'
import {IoMdCall} from 'react-icons/io'
import submit from '../../images/submit.png'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Pager from '../Pager/Pager'
const WarrenAve = () => {
    return (
        <div>
            <Pager pageTitle="Hillside" isBlue={true} bigTitle="FREE PCR &#38; RAPID COVID-19 TESTING " isRed={true} imgBanner={contactImg} height="600px" left="20%" />
            <section className="page-content">
                <div className="container">
                    <div className="contact-page">
                        <div className="contact-head-warrenave">
                        <p>Get Tested Safely For Free Today</p>
                        <div className='main-title'>Are you looking to ensure the health and safely of  <br /> you and everyone around you?</div>
                        
                        </div>
                        {/* <!--contact-head end--> */}
                        <div className="contact-main">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="contact_info_warrenAve">
                                        <h3 className="warrenAve-sub-title white">Contacts</h3>
                                        <ul className="warrenAve-cl-list">
                                            <li>
                                                <span className="warrenAve-ci-icon">
                                                <i><FaLocationArrow size={25}/></i>
                                                </span>
                                                <p>4003 Warren Ave.
                                                    Hillside, IL 60162</p>
                                            </li>
                                            <li>
                                                <span className="warrenAve-ci-icon">
                                                <i><FaClock size={25}/></i>
                                                </span>
                                                <p><span>Mon-Sat:</span> 9 am til 6 pm <span>Sunday:</span> Closed</p>
                                            </li>
                                            <li>
                                                <span className="warrenAve-ci-icon">
                                                <i><HiMail size={25}/></i>
                                                </span>
                                                <p>FreeCovidTestsForYou@gmail.com</p>
                                            </li>
                                            <li>
                                                <span className="warrenAve-ci-icon">
                                                <i><IoMdCall size={25}/></i>
                                                </span>
                                                <p>Gogi Patel : (630)903-4866<br/>Ravi Patel : (630)440-0736</p>
                               
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

export default WarrenAve
