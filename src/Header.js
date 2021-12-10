import React from 'react';
import {
    NavLink
} from "react-router-dom";
import Searchbar from './routes/Searchbar.js'
import craterLogoImage from "./img/crater-logo-white-cropped.png"


export default function Header(props) {
    const searchValue = props.searchValue;
    const handleSearchValueChange = props.handleSearchValueChange;
    const handleSearchValueSubmit = props.handleSearchValueSubmit;

    return (
        <div>
            <div className='page-header-container'>
                <div>
                    <NavLink to="/">
                        <img className='crater-logo' src={craterLogoImage} alt=""></img>
                    </NavLink>
                </div>
                <div className='menu-search-container'>
                    <Searchbar searchValue={searchValue} onSearchValueChange={handleSearchValueChange} onSearchValueSubmit={handleSearchValueSubmit} />
                    <nav>
                        <NavLink to="artist" className='menuLink'>Artists</NavLink>
                        <NavLink to="dj" className='menuLink'>DJs</NavLink>
                        <NavLink to="info" className='menuLink'>Info</NavLink>
                        <NavLink to="login" className='menuLink'>Login</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    )
}