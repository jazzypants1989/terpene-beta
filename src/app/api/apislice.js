import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:2121/" }),
  tagTypes: ["Pages", "User"],
  endpoints: (builder) => ({}),
});

export const { useGetPagesQuery, useGetUserQuery } = apiSlice;
