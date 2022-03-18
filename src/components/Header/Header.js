import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
	const [result, setResult] = useState([])

    // fetching data
    async function fetchCurrencyData() {
        const url = 'https://www.cbr-xml-daily.ru/daily_json.js'

        await axios.get(url).then(data => {
            const answer = data.data.Valute
            setResult(answer)
            for (let key in result) {
				const arr = result[key]
				const arrAnswer = Object.keys(arr)
				console.log(arrAnswer)
			}
        })
    }

  	return (
    	<div className="header-container">
			<div className="header-container-block">
				<h1 className="header-container-title">The Easiest Way to <br /><span className="header-container-span">Track Multiple Currencies</span></h1>
			</div>
			<div className="header-container-block">
				<p className="header-container-text">This app allows you to track currency stock and <br /> watch details about world's money</p>
			</div>
			<div className="header-container-block">
				<NavLink to={'/table'}><button className="header-container-btn" onClick={() => fetchCurrencyData()}>Get Started</button></NavLink>
			</div>
		</div>
  )
}

export default Header