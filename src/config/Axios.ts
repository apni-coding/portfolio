import axios from "axios";
const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
Axios.interceptors.request.use(
  (config: any) => {
    // Modify the request config here (add headers, authentication tokens)
    const accessToken = localStorage.getItem("accessToken");

    // If token is present add it to request's Authorization Header
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: any) => {
    // Handle request errors here

    return Promise.reject(error);
  }
);
// End of Request interceptor

// Response interceptor
Axios.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response;
  },
  (error) => {
    // Handle response errors here

    return error;
  }
);
// End of Response interceptor

export default Axios;
