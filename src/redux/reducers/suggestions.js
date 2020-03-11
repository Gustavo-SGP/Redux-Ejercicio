const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case 'findSugestions': {
            return [
                {
                    id: 1,
                    title: 'findSuggestions',
                },
            ]
        }
        default:
            return state;
    }
}

export default reducer;