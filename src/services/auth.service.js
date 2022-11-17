import http from "../http";

const authEndpoint = "authenticate/";

const authService = {
    login: async (email, password) => {
        return http.post(authEndpoint + "login", { email, password });
    },
    register: async (payload) => {
        return http.post(authEndpoint + "register", payload);
    } /* ,
    logout: async () => {
        return http.post(authEndpoint + "logout");
    } */
};

export default authService;
