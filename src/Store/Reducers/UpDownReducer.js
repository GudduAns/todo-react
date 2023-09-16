const initialState = 5

export const UpDownReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + 1
        case "DECRIMENT": return state - 1

        default: return state
    }
}
