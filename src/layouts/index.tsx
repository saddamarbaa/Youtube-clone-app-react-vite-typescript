import styled from 'styled-components'
import MainNavigation from './Header'

type LayoutProps = {
	children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
	return (
		<Wrapper>
			<MainNavigation />
			<main className="Layout">{children}</main>
			{/* <Footer /> */}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	min-height: 100vh;
	width: 100%;
`

export default Layout
