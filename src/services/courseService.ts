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
      console.log(error.response.data.message);
      return error.response;
    });
    return res;
  },
  getFeatured: async () => {
    const token = localStorage.getItem("streamMe-token")
      ? localStorage.getItem("streamMe-token")
      : sessionStorage.getItem("streamMe-token");
    const res = await api
      .get("/courses/featured", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        console.log(error.response.data.message);
        return error.response;
      });
    return res;
  },
};

export default courseService;
