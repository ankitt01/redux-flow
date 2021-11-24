import React from 'react'
import { connect } from 'react-redux'
function Ball(props) {
    return (
        <div>
            <h1>Balls: {props.balls} </h1>
            <button onClick={props.buyBall}>BUY BALL</button>
            <button onClick={props.sellBall}>SELL BALL</button>
        </div>
    )
}
const mapStateToProps = (state) => { //to get value from state as props
    return {
        balls: state.ball.balls
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyBall: () => dispatch({type:"BUY_BALL"}),
        sellBall: () => dispatch({type:"SELL_BALL"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ball)
