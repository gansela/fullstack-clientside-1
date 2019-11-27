import Actions from "./actions.config"

const initialState = {
    user: {
        email: "",
        password: "",
        age: 0,
        fullName: ""
    },
    userLoading: false,
    redirect: false,
    session: null,
    flights: [],
}


export default function root(state = initialState, action: any) {
    switch (action.type) {
        case Actions.SAVE_USER_PENDING: {
            return {
                ...state,
                user: action.payload.user,
                userLoading: true
            }
        }
        case Actions.SAVE_USER_SUCCESS: {
            return {
                ...state,
                userLoading: false,
                redirect: action.payload.redirect
            }
        }
        case Actions.DISABLE_REDIRECT: {
            return {
                ...state,
                redirect: false
            }
        }
        case Actions.STOP_SESSION: {
            return {
                ...state,
                session: null,
                flights: []
            }
        }
        case Actions.LOGIN_USER_PENDING: {
            return {
                ...state,
                userLoading: true
            }
        }
        case Actions.LOGIN_USER_SUCCESS: {
            return {
                ...state,
                userLoading: false,
                redirect: action.payload.redirect,
                session: action.payload.session,
                user: action.payload.user
            }
        }
        case Actions.GET_FLIGHTS_PENDING: {
            return {
                ...state,
                userLoading: true,
                
            }
        }
        case Actions.GET_FLIGHTS_SUCCESS: {
            const { flightsArr } = action.payload
            return {
                ...state,
                userLoading: false,
                flights: flightsArr
            }
        }
        default: {
            return state
        }
    }

}