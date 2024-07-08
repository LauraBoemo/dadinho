import { LoginResponse } from "./login/loginService";

const getStorage = (storageValue: "token" | "id" | "role" | "email") => {
  try {
    return sessionStorage.getItem(storageValue);
  } catch (exception) {
    console.error(`Dadinho Error: sessionStorage error. Unable to read ${storageValue} value!`);
  }
  return null;
};

const setStorage = (user: LoginResponse) => {
  try {
    sessionStorage.setItem("id", user.id);
    sessionStorage.setItem("role", user.role);
    sessionStorage.setItem("email", user.email);
    sessionStorage.setItem("token", user.token);
  } catch (exception) {
    console.error("Dadinho Error: sessionStorage error. Unable to write values!");
  }
}

const handleLogout = () => {
  sessionStorage.clear();
}

const adminVerify = () => {
  try {
    return sessionStorage.getItem("role") === "ADMIN" || sessionStorage.getItem("role") === "TEACHER";
  } catch (exception) {
    console.error(`Dadinho Error: sessionStorage error. Unable to read role value!`);
  }
  return false;
}
  
export { getStorage, setStorage, handleLogout, adminVerify };
  