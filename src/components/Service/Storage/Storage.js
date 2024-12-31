export const setUserToken = (id) => {
  return localStorage.setItem("idToken", id);
};
export const getUserToken = () => {
  return localStorage.getItem("idToken");
};

export const logOut = () => {
  return localStorage.removeItem("idToken");
};
export const authentication = () => {
  return getUserToken() != null ? true : false;
};
console.log(authentication());
