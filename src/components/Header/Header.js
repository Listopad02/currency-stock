import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = props => {
  	return (
    	<div className="header-container">
			<div className="header-container-block">
				<h1 className="header-container-title">The Easiest Way to <br />
				<span className="header-container-span">Track Multiple Currencies</span></h1>
			</div>
			<div className="header-container-block">
				<p className="header-container-text">This app allows you to track currency stock and <br /> watch details about world's money</p>
			</div>
			<div className="header-container-block">
				<NavLink to={'/table'}><button className="header-container-btn">Get Started</button></NavLink>
			</div>
		</div>
	)
}


export default Header