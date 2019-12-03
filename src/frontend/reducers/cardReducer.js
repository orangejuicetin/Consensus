const defaultState = {
    allCards: []
}

const cardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                allCards: action.allCards
            }
    }
}

module.exports = cardReducer; 