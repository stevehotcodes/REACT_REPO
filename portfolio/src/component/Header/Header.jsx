import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import '../Header/Header.scss';

const Header = () => {
  const NavArray = [
    {
      info: 'Home',
      path: '/home'
    },
    {
      info: 'Contacts',
      path: '/contacts'
    },
    {
      info: 'About',
      path: '/about'
    },
    {
      info: 'Blog',
      path: '/blog'
    },
    {
      info: 'Skills',
      path: '/skills'
    }
  ];

  return (
    <nav className='header-container'>
      <div className="logo">
        <span>PORT</span>
        <span>FOLIO</span>
      </div>
       <div class="nav-links">
                {NavArray.map((item, index) => (
                        <Link to={item.path} className='nav-link' activeClassName='active' key={index}>
                        <span>{item.info}</span>
                        {/* <span>heeh</span> */}
                        </Link>
                ))}
       </div>
     




     <div className='download-cv'><span>Download CV</span></div>
    </nav>
  );
};

export default Header;
