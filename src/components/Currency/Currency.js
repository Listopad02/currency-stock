import React from 'react'
import './Currency.css'

const Currency = () => {
    return (
        <section className="section">
            <div className="section-content">
                <div className="section-content-info">
                    <div className="section-content-container">
                        <h2 className="section-content-header">Market Report</h2>
                        <p className="section-content-text">Current info for the last 24 hours</p>
                    </div>
                </div>
                <div className="section-content-table">
                    <div className="content-table-item">Currency</div>
                    <div className="content-table-item">Price</div>
                    <div className="content-table-item">24h change</div>
                    <div className="content-table-item">10d change</div>
                </div>
                <div className="section-content-table">
					<div className="content-table-item">test</div>
					<div className="content-table-item">test</div>
					<div className="content-table-item">test</div>
					<div className="content-table-item">test</div>
				</div>
            </div>
        </section>
    )
}

export default Currency