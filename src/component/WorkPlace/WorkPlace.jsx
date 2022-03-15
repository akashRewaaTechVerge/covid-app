import React from 'react'
import Pager from '../Pager/Pager'
import contactImg from '../../images/worktest.svg'
import submit from '../../images/submit.png'
import { FaClock, FaFacebookF, FaInstagram, FaLocationArrow, FaWhatsapp } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { IoMdCall } from 'react-icons/io'
import testcorona from '../../images/testcorona.jpg'
import './WorkPlace.css'

function WorkPlace() {
  return (
    <>
       <Pager pageTitle="Workplace Testing" bigTitle="Workplace Testing" isRed={true} imgBanner={contactImg} height="600px" left="20%" />
            <section>
              <p className='testingTitle'>Workplace Testing</p>
              <div class="card-body">
                <div className='main-title'>
                    OSHA Emergency Temporary Standard now requires employees to either be fully vaccinated or get weekly COVID tests starting January 4th 2022. Center for COVID Control can help with weekly on-site testing. Space is limited, 
                    please fill out this form to insure your company’s spot for weekly on-site testing.
                </div>
                </div>  
            </section>
            <section className="page-content">
                <div className="container">
                    <div className="contact-page">
                      {/* <div className="contact-head-mainStreet">
                          <div className='main-title'> OSHA Emergency Temporary Standard now requires employees to either be fully vaccinated or get weekly COVID tests starting January 4th 2022. Center for COVID Control can help with weekly on-site testing. Space is limited, please fill out this form to insure your company’s spot for weekly on-site testing.</div>
                          <div> <p>Workplace Testing</p> </div> 
                      </div>   */}
                        {/* <!--contact-head end--> */}
                      <div className="contact-main">
                        <div class="container">
                          
                            <div class="card">
                              <div class="card-horizontal">
                                  <div class="img-square-wrapper">
                                      <img class="" src={testcorona} alt="Card image cap" />
                                  </div>
                                  <div class="card-body">
                                  <h4 class="card-title offer">We Offer</h4>
                                      <p class="card-text">
                                          We will conduct a quick survey to better understand your business needs and strategize a custom fit solution for your organization.
                                          You will work alongside your account manager to agree on a weekly routine to conduct testing.
                                          The employees receive a SELF SWAB COVID test Admin users can oversee all test results with a portal access and the staff members will receive their results via email.  
                                      </p>
                                  </div>
                              </div>
                              <div class="card-footer">
                                  {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--contact-page end--> */}
                </div>
            </section>
            {/* <!--page-content end--> */}
    </>
  )
}

export default WorkPlace
 