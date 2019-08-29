import * as types from '../actions/types'

const initialState = {
    title: {
        isLoading: false,
        error: null,
        data: null
    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case types.SAY_HI_REQUEST:
            return {
                ...state,
                title: {
                    isLoading: true,
                    error: null,
                    data: null
                }
            }

        case types.SAY_HI_SUCCESS:
            return {
                ...state,
                title: {
                    isLoading: false,
                    error: false,
                    data: payload
                }
            }

        case types.SAY_HI_FAILURE:
            return {
                ...state,
                title: {
                    isLoading: false,
                    error: payload,
                    data: null
                }
            }

        default:
            return state
    }
}
