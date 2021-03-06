import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchData } from '../../redux/actions/actions'
import Loader from '../Loader/Loader'
import { AiOutlineRise, AiOutlineFall } from 'react-icons/ai'
import Tooltip from '@mui/material/Tooltip';
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
                        props.result.map((elem, i) => {
                            let className = "content-table-item"
                            const calculation = props.result[i][5] - props.result[i][6]
                            if (calculation <= 0) {
                                className += ' negative'
                            } else {
                                className += ' positive'
                            }
                            return (
                                <div className="section-content-table" key={i}>
                                    <Tooltip title={props.result[i][4]} placement='right' arrow>
                                        <div className="content-table-item">{props.result[i][2]}</div>
                                    </Tooltip>
                                    <div className="content-table-item">{props.result[i][6]}</div>
                                    <div className={className}>
                                        {(props.result[i][5] - props.result[i][6]).toFixed(4)}
                                        {calculation >= 0 ? <AiOutlineRise size={14} className="chart" /> : <AiOutlineFall size={14} className="chart" />}
                                    </div>
                                    <div className="content-table-item"><NavLink to={'/table/' + props.result[i][0]} className="content-table-link">show more</NavLink></div>
                                </div>
                        )})
                    : <Loader />
                }
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
		fetchData: () => dispatch(fetchData())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Currency)