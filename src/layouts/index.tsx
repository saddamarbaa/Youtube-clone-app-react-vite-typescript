import styled from 'styled-components'
import MainNavigation from './Header'
import { useThemeContext } from '../globalStates/contexts/ThemeContext'

type LayoutProps = {
	children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
	const { theme } = useThemeContext()
	return (
		<Wrapper isDarkMode={theme == 'dark'}>
			<MainNavigation />
			<main className="Layout">{children}</main>
			{/* <Footer /> */}
		</Wrapper>
	)
}

const Wrapper = styled.div<{ isDarkMode: boolean }>`
	min-height: 100vh;
	width: 100%;
	background-color: ${(props) => (props.isDarkMode ? '#333' : '#f9f9f9')};
	color: ${(props) => (props.isDarkMode ? '#fff' : '#333')};
`

export default Layout
