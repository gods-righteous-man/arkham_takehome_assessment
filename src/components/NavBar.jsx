import React from 'react';
import '../styles/Nav.css';


function NavBar() {
  return (
    <div>
        <header>
           {/* <Logo className='logo' style={{width: '100px', color:"white"}}/> */}
            <img src={require("../arkham_logo.png")} alt="logo" className='logo' style={{width: '200px', height: '100px', color:"white"}}/>
            
            <nav>
                <ul className='nav_links'>
                    <li><a href='/'>MEDIA</a></li>
                    <li><a href="/">BLOG</a></li>
                    <li><a href="/">REPORTS</a></li>
                    <li><a href="/">CAREERS</a></li>
                    <li><a href="/">ABOUT</a></li>
                    <li><a href="/">LANGUAGE</a></li>
                    <li><a href="/">CONTACT</a></li>
                    
                </ul>
            </nav>
            <a href="/" className='cta'><button>PLATFORM</button></a>
        </header>
    </div>
  )
}

export default NavBar