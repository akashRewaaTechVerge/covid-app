import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'
import dose from '../../images/dose.png'
import Lottie from 'react-lottie'
import footerAnim from '../../animation/footer.json'
import { Link } from 'react-router-dom'
const Footer = () => {
	const defaultOpt={
		loop:true,
		autoplay:true,
		animationData:footerAnim,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		  },
	}
	const [windowDimension, setWindowDimension] = useState(null);
    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowDimension <= 640;
	return (
		<div>
			<footer>
				<div class="container">
					<div class="top-footer">
						<div class="row">
							<div class="col-lg-6 col-md-12">
								<div class="widget widget-info">
									{/* <h3 class="widget-title">NEWSLETTER</h3>
									<form class="widget-form">
										<input type="text" name="email" placeholder="Your e-mail" />
										<button type="submit"><i><FaArrowRight /></i></button>
									</form>
									<span>Sign up to receive sprecial offers!</span> */}
									<ul class="social-links">
										<li><a href="#" title=""><i><FaWhatsapp size={20} /></i></a></li>
										<li><a href="#" title=""><i><FaInstagram size={20} /></i></a></li>
										<li><a href="#" title=""><i><FaFacebook size={20} /></i></a></li>
									</ul>
									{/* <!--social-links end--> */}
								</div>
								{/* <!--widget-info end--> */}
							</div>
							<div class="col-lg-6 col-md-12">
								<div class="row">
									<div class="col-lg-4 col-md-4 col-sm-6 col-12 ">
										{isMobile?<Lottie className='footer-img' style={{width:250,height:250,marginLeft:'250px',marginBottom:'-100px'}} options={defaultOpt}   />
										:
										<Lottie className='footer-img' style={{width:250,height:250,marginLeft:'400px',marginBottom:'-80px'}} options={defaultOpt}   />	
									}
									</div>
								</div>
							</div>

						</div>
					</div>
					{/* <!--top-footer end--> */}
					<div class="bottom-footer">
						<div class="ft-logo">
							<img src="assets/images/ft-logo.png" alt="" />
						</div>
						{/* <!--ft-logo end--> */}
						<ul class="btm-links">
							<li>Copyright © 2022 All rights reserved by <Link to="/">Weswab</Link> </li>
						</ul>
						{/* <!--btm-links end--> */}
						<div class="clearfix"></div>
					</div>
					{/* <!--bottom-footer end--> */}
				</div>
			</footer>
			{/* <!--footer end--> */}
		</div>
	)
}

export default Footer
