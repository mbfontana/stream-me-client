import api from "./api";

export type UserParams = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  createdAt: string;
};

export type PasswordParams = {
  currentPassword: string;
  newPassword: string;
};

const profileService = {
  getCurrentUser: async () => {
    const token =
      localStorage.getItem("streamMe-token") ||
      sessionStorage.getItem("streamMe-token");

    const res = await api
      .get("/users/account", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        return error.response;
      });

    return res.data;
  },
  updateUser: async (params: UserParams) => {
    const token =
      localStorage.getItem("streamMe-token") ||
      sessionStorage.getItem("streamMe-token");

    const res = await api
      .put("/users/account", params, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        if (error.response.status === 400 || error.response.status === 401)
          return error.response;
        return error;
      });

    return res.status;
  },
  updatePassword: async (params: PasswordParams) => {
    const token =
      localStorage.getItem("streamMe-token") ||
      sessionStorage.getItem("streamMe-token");

    const res = await api
      .put("/users/account/password", params, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        if (error.response.status === 400 || error.response.status === 401)
          return error.response;
        return error;
      });

    return res.status;
  },
};

export default profileService;
