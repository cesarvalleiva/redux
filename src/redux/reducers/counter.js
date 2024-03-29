import { actions } from '../actions/counter';

const initialState = {
    value: 100,
    name: "Cesar"
}

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case actions.INCREMENT:
          return {
            ...state,
            value: state.value + 1
          };
        case actions.DECREMENT:
          return {
            ...state,
            value: state.value - 1
          };
        case actions.RESET:
          return {
            ...state,
            value: initialState.value
          };
        default:
          return state;
    }
}