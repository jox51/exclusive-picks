import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { eastFunc } from "../../utils/sportsData"
import {
  baseballDataRestruc,
  extractPlayerDetails,
  filterEYearPlayers,
  matchEYearPlayers
} from "../../utils/baseballTeamDataForm"
import { teamsCurrNumMatch } from "../../utils/winLossMatch"
const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY
const API_HOST = import.meta.env.VITE_API_HOST
const REG_URL = import.meta.env.VITE_REG_URL

const urlBasketballPostTotalStandings =
  "/basketball/tournament/132/season/45096/standings/total"
const urlBaseballPostTotalStandings =
  "/baseball/tournament/11205/season/47941/standings/total"
// let urlBaseballPlayerDetails = `/baseball/team/${teamId}/players`
//current season, 47941
// last season, 46774
const basketball = "basketball"
const baseball = "baseball"

const initialState = {
  loading: false,
  baseballStatsLoading: false,
  playerDetailsLoading: false,
  basketballPicksLoading: false,
  baseballStatsLoaded: false,
  sportsStats: [],
  formattedData: [],
  arePicksFiltered: false,
  teamsFilteredPicks: [],
  baseballTeamIds: [],
  playerDetails: [],
  eYearFormatData: [],
  eYearPlayerFilter: false,
  registerResp: [],
  loginResp: []
}

export const getStats = createAsyncThunk(
  "getStats/data",
  async (_, thunkAPI) => {
    // params passing user input
    // const { loginResp } = thunkAPI.getState().arbs
    let config = {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST
      }
    }

    try {
      const resp = await axios(
        `${API_URL}${urlBasketballPostTotalStandings}`,
        config
      )
      return resp.data
    } catch (error) {
      return error.message
    }
  }
)
export const getBaseballStats = createAsyncThunk(
  "getBaseballStats/data",
  async (_, thunkAPI) => {
    // params passing user input
    // const { loginResp } = thunkAPI.getState().arbs
    let config = {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST
      }
    }

    try {
      const resp = await axios(
        `${API_URL}${urlBaseballPostTotalStandings}`,
        config
      )
      return resp.data
    } catch (error) {
      return error.message
    }
  }
)
export const getPlayerDetails = createAsyncThunk(
  "getPlayerDetails/data",
  async (_, thunkAPI) => {
    // params passing user input
    const { playerDetails, baseballTeamIds, formattedData } =
      thunkAPI.getState().edges
    let config = {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST
      }
    }

    try {
      //for loop to loop through teams
      let teamId = 0
      let resArr = []

      for (const ele of baseballTeamIds) {
        const { id } = ele
        teamId = id
        const resp = await axios(
          `${API_URL}/baseball/team/${teamId}/players`,
          config
        )
        resArr = [...resArr, resp.data]
      }

      const playerDets = extractPlayerDetails(resArr)
      const playerRelevInfo = filterEYearPlayers(playerDets)
      const eYearMatchedPlayer = matchEYearPlayers(
        formattedData,
        playerRelevInfo
      )

      return { playerRelevInfo, eYearMatchedPlayer }
    } catch (error) {
      return error.message
    }
  }
)

export const registerUser = createAsyncThunk(
  "registerUser/data",
  async (userRegisterData, thunkAPI) => {
    try {
      const resp = await axios.post(`${REG_URL}/api/v1/auth/register`, {
        data: {
          user: userRegisterData
        }
      })

      return resp.data
    } catch (error) {
      return error.message
    }
  }
)
export const loginUser = createAsyncThunk(
  "loginUser/data",
  async (userLoginData, thunkAPI) => {
    try {
      const resp = await axios.post(`${REG_URL}/api/v1/auth/login`, {
        data: {
          user: userLoginData
        }
      })

      return resp.data
    } catch (error) {
      return error.message
    }
  }
)

const edgesSlice = createSlice({
  name: "edges",
  initialState,
  reducers: {
    filterPicks: (state, { payload }) => {
      state.teamsFilteredPicks = teamsCurrNumMatch(payload)
      state.arePicksFiltered = true
    },
    logoutUser: () => {
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStats.pending, (state) => {
        state.loading = true
        state.basketballPicksLoading = true
      })
      .addCase(getStats.fulfilled, (state, { payload }) => {
        state.loading = false
        state.arePicksFiltered = false
        state.basketballPicksLoading = false
        state.baseballStatsLoaded = false

        state.eYearPlayerFilter = false
        state.sportsStats = payload
        state.formattedData = eastFunc(payload, basketball)
      })
      .addCase(getStats.rejected, (state, { payload }) => {
        state.basketballPicksLoading = true

        state.loading = false
      })
      .addCase(getBaseballStats.pending, (state) => {
        state.baseballStatsLoading = true
      })
      .addCase(getBaseballStats.fulfilled, (state, { payload }) => {
        state.loading = false
        state.baseballStatsLoading = false
        state.arePicksFiltered = false
        state.eYearPlayerFilter = false
        state.baseballStatsLoaded = true
        state.sportsStats = payload
        state.formattedData = eastFunc(payload, baseball)
        state.baseballTeamIds = baseballDataRestruc(payload)
      })
      .addCase(getBaseballStats.rejected, (state, { payload }) => {
        state.loading = false
      })
      .addCase(getPlayerDetails.pending, (state) => {
        state.loading = true
        state.playerDetailsLoading = true
      })
      .addCase(getPlayerDetails.fulfilled, (state, { payload }) => {
        state.loading = false
        state.playerDetailsLoading = false
        state.baseballStatsLoaded = true
        state.playerDetails = payload.playerRelevInfo
        state.eYearFormatData = payload.eYearMatchedPlayer
        state.eYearPlayerFilter = true
      })
      .addCase(getPlayerDetails.rejected, (state, { payload }) => {
        state.loading = false
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false
        state.registerResp = payload
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false
        state.loginResp = payload
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false
      })
  }
})

export const { filterPicks, logoutUser } = edgesSlice.actions

export default edgesSlice.reducer
