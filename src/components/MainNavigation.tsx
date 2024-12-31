import styled from 'styled-components'
import {
	FaSearch,
	FaBell,
	FaTh,
	FaVideo,
	FaMicrophone,
	FaBars,
} from 'react-icons/fa'

import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router'
import { auth } from '../config'
import { getRandomIntNumberBetween } from '../utils/lib'
import image from '../assets/images/youtube_logo_icon.png'

const MainNavigation = () => {
	const [user] = useAuthState(auth)

	const userSignedOutHandler = () => {
		if (user) {
			auth
				.signOut()
				.then(() => {
					// Sign-out successful.
				})
				.catch((error) => {
					// An error happened.
				})
		}
	}

	return (
		<MainNavigationWrapper>
			<nav>
				<HeaderLetContainer>
					<IconButton className="hid-sm">
						<FaBars className="icon" />
					</IconButton>
					<Link to={'/'}>
						<Logo>
							<img
								className="logo-img"
								src={image}
								alt="Picture of the youtube"
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
								}}
							/>
						</Logo>
					</Link>
				</HeaderLetContainer>

				<HeaderMiddleContainer>
					<input type="text" placeholder="Search " />
					<FaSearch className="icon" />
				</HeaderMiddleContainer>
				<HeaderRightContainer>
					<IconButton className="icon-rounded MuiSvgIconCustom">
						<FaMicrophone className="icon" />
					</IconButton>

					<IconButton className="icon-rounded MuiSvgIconCustom">
						<FaVideo className="icon" />
					</IconButton>

					<IconButton className="icon-rounded MuiSvgIconCustom">
						<FaTh className="icon" />
					</IconButton>

					<IconButton className="icon-rounded MuiSvgIconCustom">
						<FaBell className="icon" />
						<div className="absolute-counter" style={{ fontSize: '14px' }}>
							{getRandomIntNumberBetween(1, 8)}
						</div>
					</IconButton>
					<Logo>
						<img
							className="logo-img"
							alt="Picture of the youtube"
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								borderRadius: '50%',
							}}
							onClick={userSignedOutHandler}
							src={
								user?.photoURL
									? user?.photoURL
									: 'https://lh3.googleusercontent.com/a/AATXAJxvNL0mo2ldUytJDKQLwdUu6Qagh5SbgZnChr5S=s96-c'
							}
						/>
					</Logo>
				</HeaderRightContainer>
			</nav>
		</MainNavigationWrapper>
	)
}

export default MainNavigation

const IconButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: none;
	border: none;
	cursor: pointer;
	padding: 0.7rem;
	border-radius: 50%;
	transition: background-color 0.3s ease;
	width: 2.6rem;
	height: 2.6rem;
	margin-right: 1rem;

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	&:active {
		background-color: rgba(0, 0, 0, 0.2);
	}

	.icon {
		color: gray;
		font-size: 2rem;
		margin-right: 0;
	}

	&.MuiSvgIconCustom {
		position: relative;

		.absolute-counter {
			position: absolute;
			top: -8px;
			right: -8px;
			background: red;
			color: white;
			width: 1.5rem;
			height: 1.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			font-size: 0.75rem;
		}
	}
`

const Logo = styled(IconButton)`
	width: 3.7rem;
	height: 3.7rem;
	@media (max-width: 568px) {
		width: 3.2rem;
		height: 3.2rem;
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
	padding-right: 2rem;
	nav {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: white;
		max-width: 90.75rem;
		overflow: hidden;
		margin: 0 auto;
		padding-top: 0.3rem;

		@media (max-width: 768px) {
			padding-top: 1rem;
		}
	}
`

const HeaderLetContainer = styled.div`
	display: flex;
	align-items: center;
	min-width: 1rem;
	flex: 0.3;
	position: relative;
	padding-left: 0.5rem;

	.hid-sm {
		@media (max-width: 568px) {
			display: none;
		}
	}
`

const HeaderMiddleContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	margin: 0 1rem;
	max-width: 38.75rem;
	color: gray;
	border-radius: 6px;
	align-items: center;
	padding: 10px;
	cursor: pointer;
	transition: 0.3s;
	background-color: #fff;
	border: 1px solid #cccccc;
	box-shadow: 0 0 3px 2px rgb(220 227 232 / 50%) rgb(0 0 0 / 7%) inset;

	&:hover,
	&:focus {
		border: 1px solid rgba(220, 227, 232);
		box-shadow: 0 0 3px 2px rgb(220 227 232 / 50%);
	}

	input {
		display: flex;
		flex: 1;
		align-items: center;
		overflow: hidden;
		padding-left: 5px;
		border: none;
		outline: none;
		background: transparent;
		font-size: 1rem;
	}

	.icon {
		margin-left: 0.5rem;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		display: none;
	}
`

const HeaderRightContainer = styled.div`
	flex: 0.3;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	.hid-md {
		@media (max-width: 468px) {
			display: none;
		}
	}

	.hid-ss {
		@media (max-width: 368px) {
			display: none;
		}
	}

	.icon-rounded.MuiSvgIconCustom {
		position: relative;

		.absolute-counter {
			position: absolute;
			top: -10px;
			left: 20px;
			background: red;
			color: white;
			width: 1.4rem;
			height: 1.4rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
		}
	}

	.icon {
		/* color: gray;
		font-size: 2rem; */
	}

	.icon-rounded {
		width: 2.5rem;
		height: 2.5rem;
		margin: 0 1rem;
	}
`
