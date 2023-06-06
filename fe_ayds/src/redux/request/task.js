import { publicInstance } from "../../axios-instance";

export const task = {
  getTask: async () => {
    try {
      const resp = await publicInstance.get("/task");
      return resp;
    } catch (error) {
      return error.response;
    }
  },
  deleteTask: async (id) => {
    try {
      const resp = await publicInstance.delete(`/task/${id}`);
      return resp;
    } catch (error) {
      return error.response;
    }
  },
};
