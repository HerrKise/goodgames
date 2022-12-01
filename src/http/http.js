import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import localStorageService from "../services/localStorage.service";
import { tokenReceived, loggedOut } from "./authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://176.99.11.245/api/",
    prepareHeaders: (headers) => {
        const accessToken = localStorageService.getAccessToken();
        if (accessToken) {
            headers.set("authorization", `Bearer ${accessToken}`);
        }
        return headers;
    }
});
const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    console.log(result);
    //отследить цепочку до статус кода
    if (result.error && result.error.status === 401) {
        const finalEndpoint =
            localStorageService.getIsStaff() === "true"
                ? "/AdminPanel/RefreshTokens"
                : "/Authenticate/RefreshToken";
        const { data } = await baseQuery(
            {
                url: finalEndpoint,
                body: {
                    token: localStorageService.getAccessToken(),
                    refreshToken: localStorageService.getRefreshToken()
                }
            },
            api,
            extraOptions
        );
        if (data) {
            const { refreshToken, accessToken } = data;
            // store the new token
            localStorageService.setTokens(refreshToken, accessToken);
            // retry the initial query
            result = await baseQuery(args, api, extraOptions);
        } else {
            //поменять диспатч
            api.dispatch(loggedOut());
        }
    }
    return result;
};

export default baseQueryWithReauth;
