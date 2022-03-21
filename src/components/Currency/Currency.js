import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchData } from '../../redux/actions/actions'
import Loader from '../Loader/Loader'
import './Currency.css'

const Currency = props => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

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
                {
                    props.result.length !== 0 ?
                        props.result.map((elem, i) => (
                        <div className="section-content-table" key={i}>
                            <div className="content-table-item">{props.result[i][2]}</div>
                            <div className="content-table-item">{props.result[i][5]}</div>
                            <div className="content-table-item">{(props.result[i][6] - props.result[i][5]).toFixed(4)}</div>
                            <div className="content-table-item"><NavLink to={'/table/' + props.result[i][0]} className="content-table-link">show more</NavLink></div>
                        </div>
                        ))
                        
                    : <Loader />
                }
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
		fetchData: () => dispatch(fetchData())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Currency)