import { jwtDecode } from "jwt-decode";

export const setUserLocalStorage = (token: string) => {
  return localStorage.setItem("accessToken", token);
};

export const getUserLocalStorage = (token: string) => {
  return localStorage.getItem("accessToken");
};

export const removeUserLocalStorage = (token: string) => {
  return localStorage.removeItem("accessToken");
};

interface IDecodedToken {
  email: string;
}

export const getAdmin = () => {
  const token = getUserLocalStorage("accessToken");
  if (token) {
    const decodedToken = jwtDecode(token as string) as IDecodedToken;
    const { email } = decodedToken;
    return email;
  }
};
