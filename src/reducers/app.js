//Use reducer to change the state of login in the store
function app ( state = { loggedIn: false, showLoader: false, user: {} }, action ) {  // setting default state to loggedIn: false
    switch (action.type) {
        case 'USER_LOGGEDIN':
            // We should avoid object mutation in redux. hence we use the spread operator(...) to create a new state object
            return {
                ...state,
                loggedIn: action.loggedInStatus
            }

        case 'PAGE_LOADING':
            return {
                ...state,
                showLoader: action.status
            }

        case 'SETUP_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default app;
