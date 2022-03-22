import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { BUTTON_CLICK_HANDLER,
         CHANGE_RESULT,
         DAYS_CHANGE } from "../actions/actionTypes";

const initialState = {
    result: [],
    daysRes: [],
    loading: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUTTON_CLICK_HANDLER: 
            return {
                ...state,
                loading: true
            }
        case CHANGE_RESULT:
            return {
                ...state, 
                result: action.payData,
                loading: false
            }
        case DAYS_CHANGE: 
            return {
                ...state,
                daysRes: action.payData,
                loading: false
            }
        default:
            return state
    }
}

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    )

export default store