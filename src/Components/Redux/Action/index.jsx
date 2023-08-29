export const incHandle = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    };
}

export const decHandle = () => {
    return { type: 'DECREMENT' };
}