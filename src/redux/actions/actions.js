import axios from "axios"
import { BUTTON_CLICK_HANDLER,
         CHANGE_RESULT,
         DAYS_CHANGE } from "./actionTypes"

export function buttonClickHandler() {
    return {
        type: BUTTON_CLICK_HANDLER
    }
}

export function fetchData() {
    return async(dispatch) => {
        dispatch(buttonClickHandler())

        const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

        try {
            await axios.get(url).then(data => {
                const answer = data.data.Valute
                console.log(answer)
                const answerArr = Object.keys(answer).map((value, i) => Object.values(answer[value]))
                dispatch(currencyInfoFetch(answerArr))
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function currencyInfoFetch(val) {
    return {
        type: CHANGE_RESULT,
        payData: val
    }
}

export function fetchPreviousDate(date) {
    return async(dispatch) => {
        dispatch(buttonClickHandler())
    
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + date - 3);
        const result = currentDate.toLocaleDateString()
        const day = result.slice(0, 2)
        const month = result.slice(3, 5)
        const year = result.slice(6)
        console.log(result)

        try {
            await axios.get(`https://www.cbr-xml-daily.ru/archive/${year}/${month}/${day}/daily_json.js`)
                .then(data => {
                    const answer = data.data.Valute
                    console.log(answer)
                    const answerArr = Object.keys(answer).map((value, i) => Object.values(answer[value]))
                    dispatch(tenDaysFetch(answerArr))
                })
        } catch (err) {
            console.log(err)
        }
    }
}

export function tenDaysFetch(val) {
    return {
        type: DAYS_CHANGE,
        payData: val
    }
}