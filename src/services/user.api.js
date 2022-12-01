import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "../http/http";

export const userApi = createApi({
    reducerPath: "user/api",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        getProfile: build.query({
            query: (payload) => ({
                url: "/Profile",
                body: payload
            })
        })
    })
});
