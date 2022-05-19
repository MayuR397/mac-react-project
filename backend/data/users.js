import bcrypt from 'bcryptjs'

const users = [
	// Admin user
	{
		name: 'Mayur khachane',
		email: 'mayur@eg.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
		isAdmin: true,
	},
	// Standard users
	{
		name: 'chaitanya khachane',
		email: 'chaitanya@eg.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
	},
	{
		name: 'sarang narkhede',
		email: 'sarang@eg.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
	},
]

export default users
