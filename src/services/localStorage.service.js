const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const USERID_KEY = "userId";
const STUFF_KEY = "isStuff";

export function setTokens(refreshToken, accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
}

export function setUserId(userId) {
    localStorage.setItem(USERID_KEY, userId);
}

export function setStaff(isStuff) {
    localStorage.setItem(STUFF_KEY, isStuff);
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
    localStorage.removeItem(USERID_KEY);
    localStorage.removeItem(STUFF_KEY);
}
export function getUserId() {
    return localStorage.getItem(USERID_KEY);
}

export function getIsStaff() {
    return localStorage.getItem(STUFF_KEY);
}

const localStorageService = {
    setTokens,
    setUserId,
    setStaff,
    getIsStaff,
    getAccessToken,
    getRefreshToken,
    getUserId,
    removeAuthData
};
export default localStorageService;
