import { configureStore } from "@reduxjs/toolkit"

import edgesSlice from "./src/features/edges/edgesSlice"

export const store = configureStore({
  reducer: {
    edges: edgesSlice
  }
})
