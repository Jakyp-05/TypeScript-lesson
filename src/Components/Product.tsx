import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../redux/store'

import {
	getServiceStart,
	getServiceSuccess,
	getServiceError,
	resetService,
} from '../redux/Service/ServiceSlice'

const API = 'https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/services'

function Product() {
	const dispatch = useDispatch()
	const { service, loading, error } = useSelector(
		(state: RootState) => state.service
	)

	const [count, setCount] = useState(0)

	async function getService() {
		try {
			dispatch(getServiceStart())
			const response = await axios.get(API)
			dispatch(getServiceSuccess(response.data))
		} catch {
			dispatch(getServiceError('Error response'))
		}
	}

	useEffect(() => {
		getService()

		return () => {
			dispatch(resetService())
		}
	}, [])

	console.error(service)
	if (loading) {
		return <h1>Loading....</h1>
	}
	if (error) {
		return <h1>Error: {error}</h1>
	}

	return (
		<div>
			{service.map(item => (
				<div key={item.id}>
					<img src={item.image} alt={item.name} />
				</div>
			))}
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Add</button>
		</div>
	)
}

export default Product
