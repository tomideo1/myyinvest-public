import axios from "axios";
import { store } from "@/store/store";
let api_url = process.env.VUE_APP_API;

const instance = axios.create({
  //   baseURL:
  //     window.location.hostname == "localhost"
  //       ? process.env.VUE_APP_API
  //       : "https://api.edc.hostville.website/v1",
  // });
  baseURL: api_url
  // headers: {
  //   'App_Key' : 'TESTING'
  // }
});

// request interceptor
instance.interceptors.request.use(
  (config, reqAuth) => {
    return config;
  },
  error => {}
);
class Api {
  static async get(url, requireAuth = false) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${store.state.auth.token}`
        }
      };
      let response = requireAuth ? await instance.get(url, config) : await instance.get(url);
      return response;
    } catch (error) {
      return error.response;
    }
  }

  static async post(url, payload, requireAuth = false) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${store.state.auth.token}`
        }
      };
      let response = requireAuth ? await instance.post(url, payload, config) : await instance.post(url, payload);
      return response;
    } catch (error) {
      return error.response;
    }
  }

  static async patch(url, payload, requireAuth = false) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${store.state.auth.token}`
        }
      };
      let response = requireAuth ? await instance.patch(url, payload, config) : await instance.patch(url, payload);
      return response;
    } catch (error) {
      return error.response;
    }
  }

  static async put(url, payload = {}, requireAuth = false) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${store.state.auth.token}`
        }
      };
      let response = requireAuth ? await instance.put(url, payload, config) : await instance.put(url, payload);
      return response;
    } catch (error) {
      return error.response;
    }
  }

  static async patch(url, payload = {}, requireAuth = false) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${store.state.auth.token}`
        }
      };
      let response = requireAuth ? await instance.patch(url, payload, config) : await instance.patch(url, payload);
      return response;
    } catch (error) {
      return error.response;
    }
  }

  static async delete(url, payload = {}, requireAuth = true) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${store.state.auth.token}`
        },
        data: payload
      };
      let response = requireAuth ? await instance.delete(url, config) : await instance.delete(url, { data: payload });
      return response;
    } catch (error) {
      return error.response;
    }
  }
}

export default Api;
