import axios from "axios";

const BASE_URL = "https://menshopmernstack.herokuapp.com/api";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)?.currentUser?.accessToken || '[]';

const TOKEN = () => {
  if (
    JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
      .currentUser.accessToken
  ) {
    return JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
      .currentUser.accessToken;
  } else { return '' }
};

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});