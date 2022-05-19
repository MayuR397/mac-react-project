import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						
						<a
							rel='noopener noreferrer'
							href='https://github.com/MayuR397'
							target='_blank'
							className='Mayur'
						>
							<i className='fas fa-user-circle'></i> Mayur
						</a>
						
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
