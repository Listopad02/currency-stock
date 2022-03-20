import axios from "axios"
import { BUTTON_CLICK_HANDLER,
         CHANGE_RESULT } from "./actionTypes"

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
                dispatch(currencyInfoFetch(answer))
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