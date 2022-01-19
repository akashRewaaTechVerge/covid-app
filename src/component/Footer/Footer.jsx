import React from 'react'
import { FaArrowRight, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'
import dose from '../../images/dose.png'
import Lottie from 'react-lottie'
import footerAnim from '../../animation/footer.json'
const Footer = () => {
	const defaultOpt={
		loop:true,
		autoplay:true,
		animationData:footerAnim,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		  },
	}
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
										<Lottie options={defaultOpt}  style={{margin: 0 ,display:'inline-block',width:400,height:400}} />
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
							<li><a href="#" title="">Privacy Policy</a></li>
							<li><a href="#" title="">Terms and Conditions</a></li>
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
