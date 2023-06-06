import { publicInstance } from "../../axios-instance.js";

export const getTask = () => async (dispatch) => {
  dispatch({ type: "GET_REQUEST" });
  try {
    const resp = await publicInstance.get("task");
    dispatch(GETTASK(resp.data));
  } catch (error) {
    dispatch({ type: "GET_ERROR_TASK", error });
  }
};
const GETTASK = (data) => ({
  type: "GET_TASK",
  payload: data,
});

export const postTask = (data) => {
  return async (dispatch) => {
    try {
      const resp = await publicInstance.post("task", data);
      if (resp.status === 200) {
        dispatch({ type: "POST_TASK", payload: resp.data });
      }
    } catch (error) {
      dispatch({ type: "GET_ERROR_POST", error });
    }
  };
};

export const updatedTask = (id, data) => {
  return async (dispatch) => {
    try {
      const res = await publicInstance.put(`task/${id}`, data);
      if (res.status === 200) {
        dispatch({
          type: "UPDATE_TASK",
          payload: { id, ...data },
        });
      }
    } catch (error) {
      dispatch({ type: "UPDATE_ERROR_DELETE", error });
    }
  };
};

export const deleteTask = (id) => {
  return async (dispatch) => {
    try {
      await publicInstance.delete(`task/${id}`);
      dispatch({ type: "DELETE_ITEM", payload: id });
    } catch (error) {
      dispatch({ type: "DELETE_ERROR_TASK", error });
    }
  };
};
