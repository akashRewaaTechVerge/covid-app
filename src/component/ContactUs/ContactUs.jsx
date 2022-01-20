import React from 'react'
import Pager from '../Pager/Pager'
import './ContactUs.css'
import contactImg from '../../images/contactus.png'
import map from '../../images/ci1.png'
import time from '../../images/ci2.png'
import mail from '../../images/ci3.png'
import call from '../../images/ci4.png'
import submit from '../../images/submit.png'
import { useState } from 'react';
import axios from 'axios'

const ContactUs = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: ""
    });
    const [result, setResult] = useState(null);
    const handleChange = (e) => {
        setValues(
            {
                ...values,
                [e.target.name]: e.target.value
            }
        )
    }
    const headers = {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true'
    }
    const formSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3030/send', { ...values }, {
            headers: headers
        })
            .then(response => {
                setResult(response.data);
                setValues({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    message: ""
                })
            }).catch(() => {
                setResult({
                    success: false,
                    message: 'Something went wrong. Try again later'
                })
            })
    }
    return (
        <div>
            <Pager pageTitle="Contact" bigTitle="Contact" imgBanner={contactImg} left={'25%'} />
            <section className="page-content">
                <div className="container">
                    <div className="contact-page">
                        <div className="contact-head">
                            {result && (<p className={`${result.success ? 'success' : 'error'}`}>
                                {result.message}

                            </p>)}
                            <p>Any questions or suggestions? <br /> Write us a message and we will contact you!</p>
                        </div>
                        {/* <!--contact-head end--> */}
                        <div className="contact-main">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="contact_info">
                                        <h3 className="sub-title white">Contacts</h3>
                                        <ul className="cl-list">
                                            <li>
                                                <span className="ci-icon">
                                                    <img src={map} alt="" />
                                                </span>
                                                <p>1556 Broadway, suite 416 New York, NY 10120 USA</p>
                                            </li>
                                            <li>
                                                <span className="ci-icon">
                                                    <img src={time} alt="" />
                                                </span>
                                                <p><span>Mon-Sat:</span> 9 am til 6 pm <span>Sunday:</span> Closed</p>
                                            </li>
                                            <li>
                                                <span className="ci-icon">
                                                    <img src={mail} alt="" />
                                                </span>
                                                <p>in.design@gmail.com</p>
                                            </li>
                                            <li>
                                                <span className="ci-icon">
                                                    <img src={call} alt="" />
                                                </span>
                                                <p>+44 20 7722 0088</p>
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
                                                        <label>First Name</label>
                                                        <input type="text" name="firstName" className="form-control name" placeholder="First Name" value={values.firstName} onChange={handleChange} />
                                                    </div>
                                                    {/* <!--form-group end--> */}
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label>Last Name</label>
                                                        {/* <select className="form-control">
                                                            <option>Los Angeles</option>
                                                            <option>Los Angeles</option>
                                                            <option>Los Angeles</option>
                                                            <option>Los Angeles</option>
                                                        </select> */}
                                                        <input type="text" name="lastName" value={values.lastName} onChange={handleChange} className="form-control name" placeholder="Last Name" />
                                                    </div>
                                                    {/* <!--form-group end--> */}
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label>E-mail</label>
                                                        <input type="email" name="email" value={values.email} onChange={handleChange} className="form-control email" placeholder="Example@gmail.com" />
                                                    </div>
                                                    {/* <!--form-group end--> */}
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label>Phone Number</label>
                                                        <input type="text" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} className="form-control" placeholder="44 20 7700 0055" />
                                                    </div>
                                                    {/* <!--form-group end--> */}
                                                </div>
                                                <div className="col-sm-10">
                                                    <div className="form-group">
                                                        <label>Message</label>
                                                        <textarea name='message' className="form-control" value={values.message} onChange={handleChange} placeholder="Hello! I have this question..."></textarea>
                                                    </div>
                                                    {/* <!--form-group end--> */}
                                                </div>
                                                <div className="col-sm-2">
                                                    <div className="form-submit">
                                                        <button type="button" id="submit"><img src={submit} alt="" onClick={formSubmit} /></button>
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

export default ContactUs
