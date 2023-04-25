import api from "./api";

export type EpisodeType = {
  id: number;
  name: string;
  synopsis: string;
  order: number;
  videoUrl: string;
  secondsLong: number;
};

export type CourseType = {
  id: number;
  name: string;
  thumbnailUrl: string;
  synopsis: string;
  episodes?: EpisodeType[];
};

const courseService = {
  getReleases: async () => {
    const res = await api.get("/courses/releases").catch((error) => {
      return error.response;
    });
    return res;
  },
  getFeatured: async () => {
    const token =
      localStorage.getItem("streamMe-token") ||
      sessionStorage.getItem("streamMe-token");
    const res = await api
      .get("/courses/featured", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        return error.response;
      });
    return res;
  },
  addFavorite: async (courseId: number) => {
    const token =
      localStorage.getItem("streamMe-token") ||
      sessionStorage.getItem("streamMe-token");
    const res = await api
      .post(
        "/favorites",
        { courseId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch((error) => {
        return error.response;
      });
    return res;
  },
  removeFavorite: async (courseId: number) => {
    const token =
      localStorage.getItem("streamMe-token") ||
      sessionStorage.getItem("streamMe-token");
    const res = await api
      .delete("/favorites", {
        headers: { Authorization: `Bearer ${token}` },
        data: { courseId },
      })
      .catch((error) => {
        return error.response;
      });
    return res;
  },
  getFavorites: async () => {
    const token =
      localStorage.getItem("streamMe-token") ||
      sessionStorage.getItem("streamMe-token");
    const res = await api
      .get("/favorites", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        return error.response;
      });
    return res;
  },
  search: async (searchName: string) => {
    const token =
      localStorage.getItem("streamMe-token") ||
      sessionStorage.getItem("streamMe-token");
    const res = await api
      .get(`/courses/search?search=${searchName}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        return error.response;
      });
    return res;
  },
};

export default courseService;
