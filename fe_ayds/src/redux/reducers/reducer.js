//import { task } from "../../task";
const initailState = {
  task: [],
  isLoading: false,
  error: null,
};

export const taskReducer = (state = initailState, action) => {
  switch (action.type) {
    case "GET_REQUEST":
      return { ...state, isLoading: true };
    case "GET_TASK":
      return { ...state, task: action.payload, isLoading: false };
    case "GET_ERROR_TASK":
      return { ...state, error: action.error, isLoading: false };
    case "POST_TASK":
      return {
        ...state,
        task: state.task.concat([action.payload]),
        isLoading: false,
      };
    case "GET_ERROR_POST":
      return { ...state, error: action.error, isLoading: false };
    case "DELETE_ITEM":
      return {
        ...state,
        task: state.task.filter((t) => t.id !== action.payload),
      };
    case "DELETE_ERROR_TASK":
      return { ...state, error: action.error, isLoading: false };
    case "UPDATE_TASK":
      return {
        ...state,
        task: state.task.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
      };
    case "UPDATE_ERROR_DELETE":
      return { ...state, error: action.error };
    default:
      return state;
  }
};
// export const taskReducer = (state = initailState, action) => {
//   switch (action.type) {
//     case "TASKAPI":
//       return { ...state, task: action.payload };
//     case "DELETE_TASK":
//       return {
//         ...state,
//         task: state.task.filter((element) => element.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };
