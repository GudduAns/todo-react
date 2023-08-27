const initialState = {
    show: false,
    message: "",
}

export const SuccessMsg = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SHOW_MSG': return {
            show: true,
            message: payload
        }
        default: return initialState
    }
}
