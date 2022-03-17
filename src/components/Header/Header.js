import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div class="header-container">
			<div class="header-container-block">
				<h1 class="header-container-title">The Easiest Way to <br /><span class="header-container-span">Track Multiple Currencies</span></h1>
			</div>
			<div class="header-container-block">
				<p class="header-container-text">This app allows you to track currency stock and <br /> watch details about world's money</p>
			</div>
			<div class="header-container-block">
				<button class="header-container-btn">Get Started</button>
			</div>
		</div>
  )
}

export default Header