import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import P00_PLAYGROUND from '../../pages/p00-playground/index.js';
import P01_WELCOME from '../../pages/p01-welcome/index.js';
import P02_ABOUT_ME from '../../pages/p02-about-me/index.js';
import P03_TERMIN_RESERVATION from '../../pages/p03-termin-reservation/index.js';

import './c01-nav-bar.scss';

const C01_NAV_BAR = () => {
    const navigate = useNavigate();

  return (
    <div className="c01-nav-bar">
        {/* <div className="nav-item" onClick={() => navigate('/playground')}>
            Playground
        </div> */}
        <div className="nav-item" onClick={() => navigate("/")}>
            Playground
        </div>
        <div className="nav-item" onClick={() => navigate('/welcome')}>
            Welcome
        </div>
        <div className="nav-item" onClick={() => navigate('/about-me')}>
            About me
        </div>
        <div className="nav-item" onClick={() => navigate('/termin-reservation')}>
            Termin Reservation
        </div>
    </div>
    );  
}

export default C01_NAV_BAR;