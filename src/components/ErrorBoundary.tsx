import { Component, ErrorInfo, ReactNode } from 'react'

import styled from 'styled-components'

interface Props {
	children?: ReactNode
}

interface State {
	hasError: boolean
}

const ErrorWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #f4f4f9;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	padding: 0 20px;
`

const ErrorCard = styled.div`
	background-color: white;
	padding: 40px;
	border-radius: 12px;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	text-align: center;
	max-width: 600px;
	width: 100%;
	margin: 20px;
`

const ErrorTitle = styled.h1`
	font-size: 2.5rem;
	color: #ff4757;
	margin-bottom: 20px;
`

const ErrorMessage = styled.p`
	font-size: 1.2rem;
	color: #2f3542;
	margin-bottom: 30px;
`

const RefreshButton = styled.button`
	background-color: #ff4757;
	color: white;
	border: none;
	padding: 12px 30px;
	font-size: 1.1rem;
	font-weight: bold;
	border-radius: 8px;
	cursor: pointer;
	box-shadow: 0px 6px 16px rgba(255, 71, 87, 0.3);
	transition: all 0.3s ease;

	&:hover {
		background-color: #ff6b81;
		box-shadow: 0px 8px 24px rgba(255, 71, 87, 0.4);
		transform: translateY(-2px);
	}
`

export class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	}

	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	public static getDerivedStateFromError(error: Error): State {
		// send the error to BE  for example
		console.log(error)
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		// You can also log the error to an error reporting service
		// logErrorToMyService(error, errorInfo)
		console.error('Uncaught error:', error, errorInfo)
	}

	handleReload = () => {
		window.location.reload()
	}

	render() {
		if (this.state.hasError) {
			return (
				<ErrorWrapper>
					<ErrorCard>
						<ErrorTitle>Oops! Something went wrong.</ErrorTitle>
						<ErrorMessage>
							We apologize for the inconvenience. Please try refreshing the
							page.
						</ErrorMessage>
						<RefreshButton onClick={this.handleReload}>
							Refresh Page
						</RefreshButton>
					</ErrorCard>
				</ErrorWrapper>
			)
		}

		return this.props.children
	}
}
