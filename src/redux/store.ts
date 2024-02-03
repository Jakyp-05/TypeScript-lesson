import { configureStore } from '@reduxjs/toolkit'
import ServiceSlice from './Service/ServiceSlice'

export const store = configureStore({
	reducer: {
		service: ServiceSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispacth = typeof store.dispatch
