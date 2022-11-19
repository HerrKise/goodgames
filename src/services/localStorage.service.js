const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const USERID_KEY = "userId";

export function setTokens(refreshToken, accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
}

export function setUserId(userId) {
    localStorage.setItem(USERID_KEY, userId);
}

export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
}
export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY);
}
export function removeAuthData() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
}
export function getUserId() {
    return localStorage.getItem(USERID_KEY);
}
const localStorageService = {
    setTokens,
    setUserId,
    getAccessToken,
    getRefreshToken,
    getUserId,
    removeAuthData
};
export default localStorageService;
