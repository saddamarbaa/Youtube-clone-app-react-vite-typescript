import styled from 'styled-components'

const ErrorCard = ({ message }: { message: string }) => (
	<Card>
		<Title>Error:</Title>
		<Message>{message}</Message>
	</Card>
)

const Card = styled.div`
	padding: 20px;
	background-color: #f8d7da;
	color: #721c24;
	border-radius: 8px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	border: 1px solid #f5c6cb;
	width: 100%;
	max-width: 500px;
	margin: 5rem;
	margin-left: auto;
	margin-right: auto;
`

const Title = styled.h4`
	margin: 0;
	font-size: 1.2rem;
`

const Message = styled.p`
	font-size: 1rem;
	margin-top: 5px;
`

export default ErrorCard
