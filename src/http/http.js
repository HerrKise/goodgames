import { fetchBaseQuery } from "@reduxjs/toolkit/query";
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
    if (result.error && result.error.status === 401) {
        // try to get a new token
        const refreshResult = await baseQuery(
            "/refreshToken",
            api,
            extraOptions
        );
        if (refreshResult.data) {
            // store the new token
            api.dispatch(tokenReceived(refreshResult.data));
            // retry the initial query
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(loggedOut());
        }
    }
    return result;
};
