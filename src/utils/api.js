import axios from "axios";
import { store } from "@/store/store";
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";
import progressFns from "@/utils/helper.js";

let api_url = process.env.VUE_APP_API;

const instance = axios.create({
  baseURL: api_url
});

const { start: progressStart, stop: progressStop } = progressFns();

/* eslint-disable no-unused-vars */
// request interceptor
instance.interceptors.request.use(
  (config, reqAuth) => {
    // NProgress.start();
    progressStart();
    return config;
  },
  error => {
    // NProgress.done();
    progressStop();
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    // NProgress.done();
    progressStop();
    return response;
  },
  error => {
    // NProgress.done();
    progressStop();
    return Promise.reject(error);
  }
);

class Api {
  static async get(url, requireAuth = false) {
    try {
      let config = {
        headers: {
          "x-auth-token": `${store.state.auth.token}`
        }
      };
      return requireAuth ? await instance.get(url, config) : await instance.get(url);
    } catch (error) {
      return error.response;
    }
  }

  static async post(url, payload, requireAuth = false) {
    try {
      let config = {
        headers: {
          "x-auth-token": `${store.state.auth.token}`
        }
      };
      return requireAuth ? await instance.post(url, payload, config) : await instance.post(url, payload);
    } catch (error) {
      console.log(`My Error: ${error}`);
      return error.response;
    }
  }

  static async patch(url, payload, requireAuth = false) {
    try {
      let config = {
        headers: {
          "x-auth-token": `${store.state.auth.token}`
        }
      };
      return requireAuth ? await instance.patch(url, payload, config) : await instance.patch(url, payload);
    } catch (error) {
      return error.response;
    }
  }

  static async put(url, payload = {}, requireAuth = false) {
    try {
      let config = {
        headers: {
          "x-auth-token": `${store.state.auth.token}`
        }
      };
      return requireAuth ? await instance.put(url, payload, config) : await instance.put(url, payload);
    } catch (error) {
      return error.response;
    }
  }

  static async delete(url, payload = {}, requireAuth = true) {
    try {
      let config = {
        headers: {
          "x-auth-token": `${store.state.auth.token}`
        },
        data: payload
      };
      return requireAuth ? await instance.delete(url, config) : await instance.delete(url, { data: payload });
    } catch (error) {
      return error.response;
    }
  }
}

export default Api;
