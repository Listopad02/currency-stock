import React from 'react'
import axios from 'axios'

async function fetchData() {
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

    try {
        const response = await axios.get(url)
        const currency = response.data
    } catch (err) {
        console.log(err);
    }
}

const CurrencyItem = () => {
  return (
    <div className='section-content-table'>
        <div className="content-table-item">Currency</div>
        <div className="content-table-item">Price</div>
        <div className="content-table-item">24h change</div>
        <div className="content-table-item">10d change</div>
    </div>
  )
}

export default CurrencyItem