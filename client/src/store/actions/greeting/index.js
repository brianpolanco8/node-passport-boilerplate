import * as type from '../types'

export const SayHi = () => async dispatch => {
    dispatch({ type: type.SAY_HI_REQUEST, payload: "hello" })

    try {
        dispatch({ type: type.SAY_HI_SUCCESS, payload: "greetings" })
    }
    catch (e) {
        console.log(e)
    }
}

