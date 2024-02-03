import React from 'react'

type UserProps = {
	id: number
	email: string
	first_name: string
	last_name: string
	avatar: string
}

interface Props {
	user: UserProps
}

function User({ user }: Props) {
	return (
		<div className='card'>
			<img src={user.avatar} alt={user.first_name} />
			<div>
				<h2>
					{user.last_name} {user.first_name}
				</h2>
				<p>{user.email}</p>
			</div>
		</div>
	)
}

export default User
