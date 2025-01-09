import styled from 'styled-components'
import RouteLayout from './Route'
import { useThemeContext } from './globalStates/contexts/ThemeContext'

export default function App() {
	const { theme } = useThemeContext()
	return (
		<AppContainer isDarkMode={theme === 'dark'}>
			<RouteLayout />
		</AppContainer>
	)
}

interface AppContainerProps {
	isDarkMode: boolean
}

const AppContainer = styled.div<AppContainerProps>`
	background-color: ${(props) => (props.isDarkMode ? '#333' : '#f9f9f9')};
	color: ${(props) => (props.isDarkMode ? '#fff' : '#333')};
	font-family: 'Roboto', sans-serif;
	transition: background-color 0.3s ease, color 0.3s ease;
	height: 100vh;
	/* overflow: hidden; */
`
