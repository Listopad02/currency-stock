import React from 'react'
import { connect } from 'react-redux'
import './CurrencyInfo.css'

const CurrencyInfo = (props) => {
	console.log(props)

	return (
    	<section className="section">
    		<div className="section-content">
    			<div className="section-content-info">
        			<div className="section-content-container">
        				<h2 className="section-content-header">Market Report - </h2>
           		 		<p className="section-content-text">Current info for the past 10 days</p>
          			</div>
        		</div>
        		<div className="section-content-table">
          			<div className="content-table-item">Day</div>
          			<div className="content-table-item">Price</div>
        		</div>
      		</div> 
    	</section>         
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
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyInfo)