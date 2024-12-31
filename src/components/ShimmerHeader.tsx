import styled, { keyframes } from 'styled-components'

export default function ShimmerHeader() {
	return (
		<MainNavigationWrapper>
			<nav>
				<HeaderLetContainer>
					<ShimmerItem width="40px" height="40px" />
					<Logo>
						<ShimmerItem width="120px" height="40px" />
					</Logo>
				</HeaderLetContainer>

				<HeaderMiddleContainer>
					<ShimmerItem width="200px" height="30px" />
					<ShimmerItem width="20px" height="20px" marginLeft="10px" />
				</HeaderMiddleContainer>

				<HeaderRightContainer>
					<ShimmerItem width="40px" height="40px" />
					<ShimmerItem width="40px" height="40px" />
					<ShimmerItem width="40px" height="40px" />
				</HeaderRightContainer>
			</nav>
		</MainNavigationWrapper>
	)
}

// Keyframes for shimmer effect
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`

const MainNavigationWrapper = styled.header`
	width: 100vw;
	min-width: 100vw;
	position: sticky;
	display: flex;
	align-items: center;
	top: 0;
	z-index: 110;
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 0px 2px rgba(0, 0, 0, 0.2);
	padding: 1rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	nav {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: white;
		/* max-width: 90.75rem; */
		overflow: hidden;
		margin: 0 auto;
		padding-top: 0.3rem;
	}
`

const HeaderLetContainer = styled.div`
	display: flex;
	align-items: center;
	min-width: 1rem;
	flex: 0.3;
	position: relative;
	padding-left: 0.5rem;
`

const HeaderMiddleContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	margin: 0 1rem;
	max-width: 38.75rem;
	color: gray;
	border-radius: 6px;
	padding: 10px;
	background-color: #fff;
	border: 1px solid #cccccc;
	box-shadow: 0 0 3px 2px rgb(220 227 232 / 50%) rgb(0 0 0 / 7%) inset;
`

const HeaderRightContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

const ShimmerItem = styled.div<{
	width?: string
	height?: string
	marginLeft?: string
}>`
	width: ${({ width }) => width || '50px'};
	height: ${({ height }) => height || '20px'};
	margin-left: ${({ marginLeft }) => marginLeft || '0'};
	background-color: #e0e0e0;
	background-image: linear-gradient(
		to right,
		#f0f0f0 0%,
		#e0e0e0 20%,
		#f0f0f0 40%,
		#f0f0f0 100%
	);
	background-repeat: no-repeat;
	background-size: 200% 100%;
	animation: ${shimmer} 1.5s infinite;
	border-radius: 6px;
	margin-right: 1rem;
`

const Logo = styled.div`
	width: 120px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`
