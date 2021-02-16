import {
  ADD_ONE,
  ADD_TO_MEMORY,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  CLEAR_MEMORY,
  RECALL_MEMORY,
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "*",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return null;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
      };

    case ADD_TO_MEMORY:
      return {
        ...state,
        memory: action.payload,
      };

    case RECALL_MEMORY:
      return {
        ...state,
        total: state.memory,
      };

    case CLEAR_MEMORY:
      return {
        ...state,
        memory: 0,
      };

    default:
      return state;
  }
};

export default reducer;
