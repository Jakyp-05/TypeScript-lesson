import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loadavg } from 'os'

interface Service {
	createdAt: string
	image: string
	name: string
	category: string
	id: string
}

interface ServiceState {
	service: Service[]
	loading: boolean
	error: string | null
}

const initialSate: ServiceState = {
	service: [],
	loading: false,
	error: null,
}

const serviceSlice = createSlice({
	name: 'service',
	initialState: initialSate,
	reducers: {
		getServiceStart(state) {
			state.loading = true
			state.error = null
		},
		getServiceSuccess(state, action: PayloadAction<Service[]>) {
			state.loading = false
			state.service = action.payload
		},
		getServiceError(state, action: PayloadAction<string>) {
			state.loading = false
			state.error = action.payload
		},
		resetService(state) {
			state.loading = false
			state.service = []
			state.error = null
		},
	},
})

export const {
	getServiceStart,
	getServiceSuccess,
	getServiceError,
	resetService,
} = serviceSlice.actions
export default serviceSlice.reducer
