import { Link } from 'react-router'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	/* background: linear-gradient(to right, #4299e1, #9f7aea, #ed64a6); */
`

const Content = styled.div`
	text-align: center;
	padding: 1.5rem;
	background-color: rgba(255, 255, 255, 0.75);
	border-radius: 0.5rem;
	box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
	max-width: 28rem;
	width: 100%;
`

const Title = styled.h1`
	font-size: 3rem;
	font-weight: 800;
	color: #2d3748;
`

const Message = styled.p`
	margin-top: 1rem;
	font-size: 1.125rem;
	color: #718096;
`

const BackButton = styled(Link)`
	margin-top: 1.5rem;
	display: inline-block;
	padding: 0.75rem 1.5rem;
	font-size: 1.125rem;
	font-weight: 600;
	color: white;
	background-color: #ff0000;
	border-color: #ff0000;
	border-radius: 0.375rem;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	text-decoration: none;

	&:hover {
		background-color: #e53e3e;
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 3px rgba(245, 101, 101, 0.5);
	}
`

export default function NotFoundScreen() {
	return (
		<Container>
			<Content>
				<Title>Oops!</Title>
				<Message>
					We're sorry, the page you requested could not be found. Please go back
					to the homepage or contact us.
				</Message>
				<BackButton to="/">Go back</BackButton>
			</Content>
		</Container>
	)
}
