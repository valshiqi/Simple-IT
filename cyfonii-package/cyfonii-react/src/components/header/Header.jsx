import React , { useState , useEffect } from 'react';

import { Link , NavLink } from 'react-router-dom';
import menus from '../../pages/menu';

import logo from '../../assets/images/logo/Simple_it_logo_inverted.png'

import './styles.scss';






const Header = () => {

    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
      };

    
    const [activeIndex, setActiveIndex] = useState(null);
    const handleDropdown = index => {
        setActiveIndex(index); 
    };

    return (
        <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>
            <div className="container big">
                <div className="row">
                    <div className="col-12">
                        <div className="header__body">
                            <div className="header__logo">
                                <Link to="/">
                                    <img id="site-logo" src={logo} alt='cyfonii' />
                                </Link>
                            </div>

                            <div className="header__right">
                            <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`}>
                                    <ul id="menu-primary-menu" className="menu">
                                        {
                                            menus.map((data,idx) => (
                                                <li key={idx} onClick={()=> handleDropdown(idx)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''} ${activeIndex === idx ? 'active' : ''}`} 
                                                
                                                >
                                                    <Link to={data.links}>{data.name}</Link>
                                                    {
                                                        data.namesub &&
                                                        <ul className="sub-menu">
                                                            {
                                                                data.namesub.map((submenu) => (
                                                                    <li key={submenu.id} className="menu-item"><NavLink to={submenu.links}>{submenu.sub}</NavLink></li>
                                                                ))
                                                            }
                                                        </ul>
                                                    }
                                                    
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                                <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                            </div>

                            <div className="header__action">
                                {/* <Link to="#" className="search-btn">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="9.7659" cy="9.76639" r="8.98856" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16.0176 16.4849L19.5416 19.9997" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>                                    
                                </Link> */}
                                {/* <Link to="/contact" className="action-btn"><span>Join Now</span></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        // <header className={`header ${scroll ? 'is-fixed' : ''}`}>
        //         <div className="tf-container">
        //             <div className="row">
        //                 <div className="col-md-12">                              
        //                     <div id="site-header-inner">                                 
        //                         <div id="site-logo" className="clearfix">
        //                             <div id="site-logo-inner">
        //                                 <Link to="/" rel="home" className="main-logo">
        //                                     <img id="logo_header" className='logo-dark' src='{logodark}' alt="Binasea" />
        //                                     <img id="logo_header" className='logo-light' src='{logo}' alt="Binasea" />
        //                                 </Link>
        //                             </div>
        //                         </div>
                                
        //                        <div className="header-center">
        //                         <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`}>
        //                             <ul id="menu-primary-menu" className="menu">
        //                                 {
        //                                     menus.map((data,idx) => (
        //                                         <li key={idx} onClick={()=> handleDropdown(idx)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''} ${activeIndex === idx ? 'active' : ''}`} 
                                                
        //                                         >
        //                                             <Link to={data.links}>{data.name}</Link>
        //                                             {
        //                                                 data.namesub &&
        //                                                 <ul className="sub-menu">
        //                                                     {
        //                                                         data.namesub.map((submenu) => (
        //                                                             <li key={submenu.id} className="menu-item"><NavLink to={submenu.links}>{submenu.sub}</NavLink></li>
        //                                                         ))
        //                                                     }
        //                                                 </ul>
        //                                             }
                                                    
        //                                         </li>
        //                                     ))
        //                                 }
        //                             </ul>
        //                         </nav>
        //                        </div>

        //                         <div className="header-right">
                                   
        //                             <DarkMode />

        //                             <Link to="/contact" className="tf-button discord"><i className="icon-fl-vt"></i><span>DISCORD</span></Link>
        //                             <Link to="#" className="tf-button connect" data-toggle="modal" data-target="#popup_bid"> <i className="icon-fl-wallet"></i><span>CONNECT</span></Link>
        //                             <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
        //                         </div>  

                                
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
                
        //     </header>
       
    );
}

export default Header;