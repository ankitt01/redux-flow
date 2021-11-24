import React from 'react'
import { connect } from 'react-redux'
function Bat(props) {
    return (
        <div>
            <h1>Bat: {props.bats} </h1>
            <button onClick={props.buyBat}>BUY BAT</button>
        </div>
    )
}
const mapStateToProps = (state) => { //to get value from state as props
    return {
        bats: state.bats
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyBat: () => dispatch({type:"BUY_BAT"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bat)
