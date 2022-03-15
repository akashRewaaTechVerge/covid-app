import React from 'react'
import './Contents.css'
import slot from '../../images/mainStreet.png'
import icon1 from '../../images/icon3.png'
import { FaArrowRight } from 'react-icons/fa'
import fadeIn from 'react-animations/lib/fade-in'
import { zoomIn } from 'react-animations'
import d from '../../images/d.png'
import vaccine from '../../images/tests.jpg'
import covidHome from '../../images/covidHome.jpg'
import covidPcr from '../../images/covidPcr.jpg'
import covidRapid from '../../images/covidRapid.jpg'
import covidtest from '../../images/testcovid.webp'
import rapidtestservice from '../../images/rapidtestservice.webp'
import pcrtestservice from '../../images/pcrtestservice.webp'
import mask from '../../images/mask.png'
  
const Contents = () => {
    return (
        <>
            <section class="main-banner">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="banner-content">
                                <h2 class="wow fadeInUp" data-wow-duration="1000ms"><span>24/7</span> Covid Testing
                                </h2>
                                <p class="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms"><span>F</span>ree Service on site</p>
                                <p class="wow fadeInUp mt-n5" data-wow-duration="1000ms" data-wow-delay="300ms" ><span>RT-PCR - 24-48 </span>hr Result</p>
                                {/* <a href="contact.html" title="" class="lnk-default wow fadeInUp" data-wow-duration="1000ms"
                                data-wow-delay="500ms">Next <i><FaArrowRight /></i> <span></span></a> */}
                                {/* <!--banz-list end--> */}
                                <div class="clearfix"></div>
                            </div>
                            {/* <!--banner-content end--> */}
                        </div>
                        <div class="col-lg-6">
                            <div class="banner-slider">
                                {/* <div class="banner-slide">
                                <img src="assets/images/resources/banner1.jpg" alt="" />
                            </div> */}
                                {/* <!--banner-slide end--> */}
                                {/* <div class="banner-slide">
                                <img src="assets/images/resources/banner2.jpg" alt="" />
                            </div> */}
                                {/* <!--banner-slide end--> */}
                                {/* <div class="banner-slide">
                                <img src="assets/images/resources/banner3.jpg" alt="" />
                            </div> */}
                                {/* <!--banner-slide end--> */}
                                <div class="banner-slide">
                                    <img className='img-file' src={slot} alt="" />
                                </div>
                            </div>
                            {/* <!--banner-slider end--> */}
                        </div>

                    </div>
                </div>
            </section>

            <section className='homeTest'>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 home-test">
                            <div class="banner-slider hmtest">
                                <div class="banner-slide">
                                    {/* <img className='img-file hmtest' src={d} alt="" /> */}
                                    <img className='img-file' src={covidHome} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="covid-content">
                                <h5 class="wow fadeInUp" data-wow-duration="1000ms"><span>Free At-Home Tests</span> Covid Testing
                                </h5>
                                <p class="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                                    The Center for COVID Control understands the shortage we as a nation are facing with regards
                                    to finding accessible COVID tests. The Center for Covid Control will soon be offering FREE At-
                                    Home Covid tests to the community.
                                </p>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='repi-test'>
                <div class="row align-items-center">
                    <div class="col-lg-8">
                        <div class="covid-content rapid-test">
                            <h5 class="wow fadeInUp" data-wow-duration="1000ms"><span>Free Rapid Covid Test</span>
                            </h5>
                            <p class="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <li>¢ Detects Omicron</li>
                                <li>¢ Highly Effective</li>
                                <li>¢ Results by the End of Day</li>
                            </p>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="banner-slider rapidtest">
                            <div class="banner-slide">
                                <img className='img-file' src={covidRapid} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pcr-test'>
                <div class="row align-items-center">
                    <div class="col-lg-4 " >
                        <div class="banner-slider">
                            <div class="banner-slide pcrimg">
                                <img className='img-file' src={covidPcr} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="covid-content pcr-test">
                            <h5 class="wow fadeInUp" data-wow-duration="1000ms"><span>Free PCR TEST</span>
                            </h5>
                            <li className='pcrtext'> Due toa national shortage, we are not offering
                                PCR testing at this time.
                            </li>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service */}
            <section className='cowin-services'>
                <div className='container'>
                    <div class="row align-items-center">

                        <div class="col-lg-12">
                            <div class="covid-content">
                                <h5 class="wow fadeInUp" data-wow-duration="1000ms">Our Services
                                </h5>
                                <h4 class="wow fadeInUp titleservice" data-wow-duration="1000ms" data-wow-delay="300ms">
                                    Center For Covid Control offers free COVID-19 testing for all patients. Choose from over 275 convenient locations across the United States. Appointments are not required.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container card">
                    <div class="row">
                        <div class="col-sm">
                            <div class="mini-cards">
                                <img src={covidtest} />
                                <div class="text">
                                    <h5 class="card-title">Free RT-PCR Covid Test</h5>
                                    <p class="card-text">Your results will be emailed within 48 hours..</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="mini-cards">
                                <img src={rapidtestservice} />
                                <h5 class="card-title">Free Rapid Antigen Test</h5>
                                <p class="card-text">
                                    Results are verbally given within 15 minutes and an email confirmation is given within 3 hours</p>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="mini-cards">
                                <img src={pcrtestservice} />
                                <h5 class="card-title">Workplace Testing</h5>
                                <p class="card-text">
                                    We offer weekly workplace testing. Please contact us for more information.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="container"><div class="row pt-0 pb-1  bg-quaternary">
                <div class="col-12 col-md-12 splash-col">
                    <div class="card splash-card border-0 ">
                        <div class="card-body">
                            <div class="card-title h4">If You Feel Sick
                                <div class="title-decor-bar-container mb-0">
                                    <span class="bg-primary title-decor-bar-m"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row column-3 if-sick-row ">
                        <div class="p-0 m-0 symp col-md-4">
                            <div class="p-0 m-0">
                                <div class="card border-0 rounded-0 mb-3">
                                    <div class="card-icon text-center">
                                        <span class="sr-only">head side cough light icon</span>
                                        <i class='fas fa-head-side-cough fa-4x' style={{color: 'blue'}}></i>
                                    </div>
                                    <div class="card-body ">
                                        <div class="card-title mb-1 h3 mb-1 text-left symptoms">Symptoms</div>
                                        <div class="outer-container">
                                            {/* <ul class="caret-list">
                                                <li>
                                                    <a href="#"> Check your symptoms </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Steps you can take if you are sick
                                                    </a>
                                                </li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-0 m-0 col-md-4">
                            <div class="p-0 m-0">
                                <div class="card border-0 rounded-0 mb-3">
                                    <div class="card-icon text-center">
                                        <span class="sr-only">bed light icon</span>
                                        <span class="fa fa-bed fa-4x bed" aria-hidden="true"></span>
                                    </div>
                                    <div class="card-body ">
                                        <div class="card-title mb-1 h3 mb-1 text-left">Quarantine &amp; Isolation</div>
                                        <div class="outer-container">
                                            {/* <ul class="caret-list">
                                                <li><a href="/coronavirus/2019-ncov/your-health/quarantine-isolation.html">When to quarantine and isolate</a></li>
                                                <li><a href="/coronavirus/2019-ncov/if-you-are-sick/">Caring for someone sick at home</a></li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-0 m-0 mask-test col-md-4">
                            <div class="p-0 m-0">
                                <div class="card border-0 rounded-0 mb-3">
                                    <div class="card-body ">
                                    <i class="fa-duotone fa-face-mask"></i>
                                        {/* <img src={mask} alt="Illustration of a bandaid" class="text-center mask"
                                            style={{ color:"blue" , filter: "drop-shadow(.8px .8px 0px #006778) drop-shadow(-.8px .8px 0px #006778)", height: "90px", width: "100px" ,margintop: "-12px" }} /> */}
                                   
                                        <h2 class="h3 mt-0 mb-1">Testing &amp; Masks</h2>
                                        <div class="outer-container">
                                            {/* <ul class="caret-list">
                                                <li><a href="/coronavirus/2019-ncov/testing/self-testing.html">Self-testing</a></li>
                                                <li><a href="/coronavirus/2019-ncov/prevent-getting-sick/masks.html">Use masks to slow the spread</a></li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box-shadow2"></div></div></div> 
            </section>
        </>
    )
}

export default Contents
