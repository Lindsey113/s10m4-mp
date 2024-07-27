import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const qoutesApi = createApi({
    reducerPath: 'qoutesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9009/api/'}),
    tagTypes: ['Quotes'],
    endpoints: build => ({
        getQuotes: build.query({
            query: () => 'quotes',
            providesTags: ['Quotes']
        }),
        toggleFake: build.mutation({

        }),
        createQuote: build.mutation({

        }),
        deleteQuote: build.mutation({

        })
    })
})

export const {
    useGetQuotesQuery,
    useToggleFakeMutation,
    useCreateQuoteMutation,
    useDeleteQuoteMutation
} = qoutesApi
