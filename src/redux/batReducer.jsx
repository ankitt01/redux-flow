const initialState = {
    bats: 20
}
const batReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'BUY_BAT':
            return {...state, bats:state.bats-1} //immutable change
        default:
            return state;
    }
}
export default batReducer