import React from 'react'

type ServiceProps = {
	firstName: string
	lastName: string
	age: number
}

function Service({ firstName, lastName, age }: ServiceProps) {
	return (
		<div>
			name: {firstName} lastname: {lastName} age: {age}
		</div>
	)
}

export default Service
