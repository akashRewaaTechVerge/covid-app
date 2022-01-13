<Styles.Wrapper>
<CSSReset />
<div>
    <div id="navbar" className="navbar-area is-sticky">
        <div className="neemo-nav">
            <div className="container">
                {
                    isMobile ?
                        <MobileNavbar.Wrapper>
                            <MobileNavbar.Items>
                                <NavLink to="/" smooth={true} spy='true' duration={2000}>
                                    <MobileNavbar.Item  className='nav-link'>
                                        <MobileNavbar.Icon>
                                            <RiHome2Line size={16} />
                                        </MobileNavbar.Icon>
                                        Home
                                    </MobileNavbar.Item>
                                </NavLink>
                                <NavLink to="/contact"  smooth={true} spy='true' duration={2000}>
                                    <MobileNavbar.Item className='nav-link'>
                                        <MobileNavbar.Icon>
                                            <RiCustomerService2Line size={16} />
                                        </MobileNavbar.Icon>
                                        Contact
                                    </MobileNavbar.Item>
                                </NavLink>
                            </MobileNavbar.Items>
                        </MobileNavbar.Wrapper>
                        :
                        <nav className="navbar navbar-expand-md navbar-light"><a className="navbar-brand" href="index.html" style={{ display: 'inline-block' }}><span style={{ float: 'right', marginRight: '15px', marginTop: '5px', fontWeight: '600', fontSize: '2rem' }}>WesWab</span></a>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><NavLink to="/#" smooth={true} spy='true' duration={2000} activeClassName='nav-link' activeStyle={{ color: 'red' }}> Home</NavLink></li>
                                    <li className="nav-item"><NavLink to="/contact" smooth={true} spy='true' duration={2000} activeClassName='nav-link' activeStyle={{ color: 'red' }}>Contact </NavLink></li>
                                </ul>
                            </div>

                        </nav>
                }

            </div>
        </div>
    </div>
</div>
</Styles.Wrapper>