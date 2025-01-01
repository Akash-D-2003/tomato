import axios from "axios";

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";

const API_KEY = "AIzaSyCoH6d1naMD0wBlXO4DbvgYBDX7jhpE5P8";

const registerApiUrl = `/accounts:signUp?key=${API_KEY}`;

const loginApiUrl = `/accounts:signInWithPassword?key=${API_KEY}`;

const getUserDataUrl = `/accounts:lookup?key=${API_KEY}`;

export const signUpData = (input) => {
  let data = {
    username: input.username,
    email: input.email,
    password: input.password,
  };
  return axios.post(registerApiUrl, data);
};
export const loginData = (input) => {
  let loginData = {
    email: input.email,
    password: input.password,
  };
  return axios.post(loginApiUrl, loginData);
};
