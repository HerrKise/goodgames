import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "user/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://176.99.11.245/api/"
    }),
    endpoints: (build) => ({
        getProfile: build.query({
            query: (payload) => ({
                url: "/Profile",
                body: payload
            })
        })
    })
});
