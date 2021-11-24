import React, {useState} from 'react'
import { connect } from 'react-redux'
function Ball(props) {
    const [qty,setQty] = useState(1);
    return (
        <div>
            <h1>Balls: {props.balls} </h1>
            <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} />
            <button onClick={() => {props.buyBall(qty)}}>BUY BALL</button>
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
        buyBall: (qty) => dispatch({type:"BUY_BALL", payload: qty}),
        sellBall: () => dispatch({type:"SELL_BALL"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ball)
