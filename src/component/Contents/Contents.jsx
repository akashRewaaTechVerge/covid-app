import React from 'react'
import './Contents.css'
import slot from '../../images/mainStreet.png'
import icon1 from '../../images/icon3.png'
import { FaArrowRight } from 'react-icons/fa'
import fadeIn from 'react-animations/lib/fade-in'
import { zoomIn } from 'react-animations'
const Contents = () => {
    return (

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
    )
}

export default Contents
