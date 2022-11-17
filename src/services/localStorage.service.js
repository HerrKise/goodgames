const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const USERID_KEY = "user-local-id";

export function setTokens({ refreshToken, accessToken, userId }) {
    localStorage.setItem(USERID_KEY, userId);
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
}
export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
}
export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY);
}
export function removeAuthData() {
    localStorage.removeItem(USERID_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
}
export function getUserId() {
    return localStorage.getItem(USERID_KEY);
}
const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getUserId,
    removeAuthData
};
export default localStorageService;
