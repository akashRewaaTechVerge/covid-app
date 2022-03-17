import React from 'react'
import { NavLink } from 'react-router-dom'
import './Pager.css'
import corona from '../../images/corona5.jpg'
const Pager = (props) => {
    return (
        <div>
            <section class="pager-section" style={{ backgroundImage:`url(${corona})` }}>
                <div class="container">
                    <div class="pager-info">
                        <ul class="breadcrumb">
                            <li><NavLink style={{textDecoration:'none'}} to="/">Home</NavLink></li>
                            <li><span>{props.pageTitle}</span></li>
                        </ul>
                        {/* <!--breadcrumb end--> */}
                        <h2 style={{fontFamily:'monospace'}}>{props.bigTitle}</h2>
                       
                          {/* {props.isRed?
                           <h3>No insurance Required - No Appointments - Walk-Ins Welcome</h3>
                           :
                           <span>Contact Us</span>
                          } */}
                        
                    </div>
                    <div class="pger-imgs style2">
                        <div class="abt-imgz">
                            <img src={props.imgBanner} style={{bottom:150,position:'relative',height:props.height,width:props.width,marginLeft:props.left}}  alt="" />
                        </div>
                    </div>
                    {/* <!--pger-imgs end--> */}
                    <div class="clearfix"></div>
                </div>
            </section>
        </div>
    )
}

export default Pager
