import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { fetchPreviousDate } from '../../redux/actions/actions'
import './CurrencyInfo.css'

const CurrencyInfo = (props) => {
	const dispatch = useDispatch()
    useEffect(() => {
		for (let i = 1; i <= 10; i++) {
			dispatch(fetchPreviousDate(-i))
		}
    }, [dispatch])

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
	return {
		result: state.result
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPreviousDate: () => dispatch(fetchPreviousDate())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyInfo)