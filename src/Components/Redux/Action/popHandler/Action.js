export const SuccessMsgAction = (msg) => {
    return {
        type: 'SHOW_MSG',
        payload: msg,
    }
}