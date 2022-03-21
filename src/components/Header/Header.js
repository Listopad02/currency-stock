import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchData } from '../../redux/actions/actions'
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
				<NavLink to={'/table'}><button className="header-container-btn" onClick={() => props.fetchData()}>Get Started</button></NavLink>
			</div>
		</div>
	)
}

function mapStateToProps(state) {
	console.log('mapStateToProps', state)
	return {
		result: state.result
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchData: () => dispatch(fetchData())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)