import styled from 'styled-components'
import {
	FaSearch,
	FaBell,
	FaTh,
	FaVideo,
	FaMicrophone,
	FaBars,
	FaTimes,
} from 'react-icons/fa'

import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router'

import { auth } from '../config'
import { getRandomIntNumberBetween } from '../utils/lib'
import image from '../assets/images/youtube_logo_icon.png'
import { useState } from 'react'
import { useDebounce } from '../customHooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { fetchYouTubeSuggestions } from '../utils/api'
import { IoSearchCircleOutline } from 'react-icons/io5'
import { useAppContext } from '../globalStates'

const MainNavigation = () => {
	const [searchTerm, setSearchTerm] = useState<string | ''>('')
	const [user] = useAuthState(auth)
	// const history = useNavigate()
	const debouncedSearchTerm = useDebounce(searchTerm, 300)
	const [isSuggestionSelected, setIsSuggestionSelected] = useState(false)
	const [isTyping, setIsTyping] = useState(false)
	const { updateFilter } = useAppContext()

	const {
		data: suggestions = [],
		isLoading,
		// error,
	} = useQuery({
		queryKey: ['youtubeSearch', debouncedSearchTerm],
		queryFn: () => fetchYouTubeSuggestions(debouncedSearchTerm),
		enabled:
			debouncedSearchTerm.length > 0 && !isSuggestionSelected && !!isTyping,
	})

	// Handle input change
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsTyping(true)
		setSearchTerm(event.target.value)
		setIsSuggestionSelected(false)
	}

	const handleSuggestionClick = (suggestion: string) => {
		const sanitizedSuggestion = suggestion.trim()
		setSearchTerm(sanitizedSuggestion)
		setIsTyping(false)
		setIsSuggestionSelected(true)
		// history(`/?q=${sanitizedSuggestion}`)
		updateFilter(suggestion)
	}

	const clearInput = () => {
		setSearchTerm('')
		setIsTyping(false)
		setIsSuggestionSelected(false)
		updateFilter('ai and coding new')
	}

	const handleSubmit = (_event: React.FormEvent<HTMLFormElement>) => {
		// history(`/?q=`)
		if (searchTerm) {
			// Handle search submit action here
		}
	}

	const userSignedOutHandler = () => {
		if (user) {
			auth
				.signOut()
				.then(() => {
					// Sign-out successful.
				})
				.catch((_error) => {
					// An error happened.
				})
		}
	}

	return (
		<MainNavigationWrapper onClick={() => setIsSuggestionSelected(false)}>
			<nav>
				<Link to={'/'}>
					<HeaderLetContainer>
						<IconButton className="hid-sm">
							<FaBars className="icon" />
						</IconButton>

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
					</HeaderLetContainer>
				</Link>

				<HeaderMiddleContainer>
					<SearchContainer onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Search"
							value={searchTerm}
							onChange={handleChange}
						/>
						{searchTerm && (
							<ClearIcon onClick={clearInput}>
								<FaTimes />
							</ClearIcon>
						)}
						<FaSearch className="icon" />
					</SearchContainer>
					{isLoading && <p>Loading...</p>}
					{isTyping && suggestions.length > 0 && !isSuggestionSelected && (
						<SuggestionDropdown>
							{suggestions.map((suggestion) => (
								<SuggestionItem
									key={suggestion.key}
									onClick={() => handleSuggestionClick(suggestion.value)}>
									<IoSearchCircleOutline
										style={{ marginRight: '1rem', fontSize: '1.3rem' }}
									/>
									{suggestion?.value}
								</SuggestionItem>
							))}
						</SuggestionDropdown>
					)}
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
		/* max-width: 90.75rem; */
		/* overflow: hidden; */
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
	position: relative;
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
	/* flex: 0.3; */
	display: flex;
	align-items: center;
`

const SearchContainer = styled.form`
	width: 100%;
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

const SuggestionDropdown = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	background: white;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	z-index: 110;
	margin-top: 5px;
	max-height: 350px;
	overflow-y: auto;
`

const SuggestionItem = styled.li`
	padding: 0.5rem;
	cursor: pointer;
	&:hover {
		background-color: #f0f0f0;
	}
`

const ClearIcon = styled.div`
	position: absolute;
	top: 50%;
	right: 2.5rem;
	transform: translateY(-50%);
	cursor: pointer;
	padding: 0.2rem;
	font-size: 1.2rem;
	color: #666;
	&:hover {
		color: #000;
	}
`
