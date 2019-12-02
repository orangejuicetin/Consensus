const defaultState = {
    loggedIn: false
}

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loggedIn: true
            }
    }
}