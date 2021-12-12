import React from 'react'
import "../components/Header.css";
import punkLogo from "../assests/header/cryptopunk-logo.png";
import searchIcon from "../assests/header/search.png";
import themeSwitchIcon from "../assests/header/theme-switch.png";
const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={punkLogo} className="punklogo" alt="logo"></img>
            </div>
            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} alt="search_icon"></img>

                </div>
                <input type="text" className='searchInput' placeholder='Collection, item or user...'/>
            </div>
            <div className='headerItem'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className='headerAction'>
                    <div className='themeLogoContainer'>
                            <img src={themeSwitchIcon} alt="dark_mode"  className='darkModeLogo'/>
                    </div>
            </div>
            <div className='buttonContainer'>
                GET IN
            </div>
         </div>
    )
}

export default Header
