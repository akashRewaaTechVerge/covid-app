import React from 'react'
import { NavLink } from 'react-router-dom'
import './Pager.css'
const Pager = (props) => {
    return (
        <div>
            <section class="pager-section">
                <div class="container">
                    <div class="pager-info">
                        <ul class="breadcrumb">
                            <li><NavLink style={{textDecoration:'none'}} to="/">Home</NavLink></li>
                        <li><span>{props.pageTitle}</span></li>
                        </ul>
                        {/* <!--breadcrumb end--> */}
                        <h2>{props.pageTitle}</h2>
                        <span>How to contact us</span>
                    </div>
                    <div class="pger-imgs style2">
                        <div class="abt-imgz">
                            <img src={props.imgBanner} style={{bottom:100,position:'relative'}}  alt="" />
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
