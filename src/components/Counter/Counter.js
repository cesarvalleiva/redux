import { connect } from "react-redux";
import { actions } from "../../redux/actions/counter";

const Counter = ({counter, dispatch}) => {
    
    const add = () => {
        dispatch({type: actions.INCREMENT})
    }

    const subtract = () => {
        dispatch({type: actions.DECREMENT})
    }

    const reset = () => {
        dispatch({type: actions.RESET})
    }
    
    return ( 
        <div className="App">
            <button onClick={() => add()}> + </button>
            <h1>{counter.value}</h1>
            <button onClick={() => subtract()}> - </button><br />
            <button onClick={() => reset()}> Reset </button>
        </div>
     );
}
 
const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Counter);