import api from "./api";
import { CourseType } from "./courseService";

export type CategoryType = {
  id: number;
  name: string;
  position: number;
  courses?: CourseType[];
};

const categoryService = {
  getAll: async () => {
    const token =
      localStorage.getItem("streamMe-token") ||
      sessionStorage.getItem("streamMe-token");

    const res = await api
      .get("/categories", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        return error.response;
      });

    return res;
  },
  getOneById: async (id: number) => {
    const token =
      localStorage.getItem("streamMe-token") ||
      sessionStorage.getItem("streamMe-token");

    const res = await api
      .get(`/categories/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        return error.response;
      });

    return res;
  },
};

export default categoryService;
