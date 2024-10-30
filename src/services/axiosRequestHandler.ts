import Axios from "@/config/Axios";
import axios from "axios";

export const GET = async (path: string, params = "") => {
  let result = {
    response: null,
    status: 500,
  };
  try {
    const response = await Axios.get(`${path}${params}`);
    if (response) {
      return {
        response,
        status: response.status,
      };
    }
  } catch (error) {
    return error;
  }

  return result;
};

export const POST = async (path: string, payload = {}, headers?: any) => {
  let result = {
    response: null,
    status: 500,
  };
  try {
    const response = await Axios.post(path, payload, headers);
    if (response) {
      return {
        response,
        status: response.status,
      };
    }
  } catch (error) {
    return error;
  }

  return result;
};

export const PUT = async (path: string, payload: any) => {
  let result = {
    response: null,
    status: 500,
  };
  try {
    const response = await Axios.put(path, payload);
    if (response) {
      return {
        response,
        status: response.status,
      };
    }
  } catch (error) {}
  return result;
};

export const DELETE = async (path: string, payload = {}) => {
  let result = {
    response: null,
    status: 500,
  };
  try {
    const response = await Axios.delete(path, {
      data: payload,
    });
    if (response) {
      return {
        response,
        status: response.status,
      };
    }
  } catch (error) {
    return error;
  }

  return result;
};
