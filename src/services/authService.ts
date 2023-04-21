import api from "./api";

interface RegisterParams {
  firstName: string;
  lastName: string;
  phone: string;
  birth: string;
  email: string;
  password: string;
}

interface LoginParams {
  email: string;
  password: string;
  rememberMe: FormDataEntryValue | null;
}

const authService = {
  register: async (params: RegisterParams) => {
    const res = await api.post("/auth/register", params).catch((error) => {
      if (error.response.status == 400) return error.response;
      return error;
    });
    return res;
  },
  login: async ({ email, password, rememberMe }: LoginParams) => {
    const res = await api
      .post("/auth/login", { email, password })
      .catch((error) => {
        if (error.response.status === 400 || error.response.status === 401)
          return error.response;
        return error;
      });
    if (res.status === 200) {
      if (rememberMe) localStorage.setItem("streamMe-token", res.data.token);
      else sessionStorage.setItem("streamMe-token", res.data.token);
    }
    return res;
  },
};

export default authService;
