import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Game } from '../App'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-json-server.typicode.com/FlavioIrl/ebac_games_redux'
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Game[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetJogosQuery } = api

export default api
