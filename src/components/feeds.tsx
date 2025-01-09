import styled from 'styled-components'
import { useNavigate, useSearchParams } from 'react-router'

import { YouTubeVideo } from '../types'
import VideoCard from './VideoCard'
import { useAppContext } from '../globalStates'
import { useState } from 'react'
import { useThemeContext } from '../globalStates/contexts/ThemeContext'

type Props = {
	videos: YouTubeVideo[]
}

const filterOptions = [
	{ label: 'All', value: 'ai and coding new' },
	{
		label: 'News',
		value:
			'donald trump news, barack obama news, justin trudeau news, world news, breaking news, united states news, donald trump news, world news, current events',
	},
	{
		label: 'Sports',
		value:
			'messi, cristiano ronaldo,sports news, football, basketball, cricket, soccer, olympics, tennis, sports highlights',
	},
	{ label: 'JavaScript', value: 'javascript tutorials' },
	{ label: 'Music', value: 'music videos' },
	{ label: 'Coding with Mosh', value: 'Code with Mosh' },
	{ label: 'React JS', value: 'react js tutorials' },
	{ label: 'Next JS', value: 'next js' },
]

const Feeds = ({ videos }: Props) => {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const defaultFilter = searchParams.get('filter') || 'ai and coding new' // Default to 'All'
	const [selectedFilter, setSelectedFilter] = useState<string>(defaultFilter)
	const { updateFilter, updateSearch } = useAppContext()
	const { theme } = useThemeContext()

	const handleFilterClick = (filter: string) => {
		setSelectedFilter(filter)
		updateFilter(filter)
	}

	const handleRedirect = (video: YouTubeVideo) => {
		const videoId =
			typeof video.id === 'object' && video.id !== null
				? video.id.videoId
				: video.id

		updateSearch(video?.snippet?.title || video?.snippet.channelTitle)
		navigate('/watch?v=' + videoId)
	}

	return (
		<FeedWrapper>
			<Heading>
				{filterOptions.map(({ label, value }) => (
					<Button
						isDarkMode={theme === 'dark'}
						key={value}
						onClick={() => handleFilterClick(value)}
						selected={selectedFilter === value}>
						{label}
					</Button>
				))}
			</Heading>

			<FeedsBody>
				<VideoGrid>
					{videos?.map((video) => {
						const videoId =
							typeof video.id === 'object' && video.id !== null
								? video.id.videoId
								: video.id
						return (
							<div key={videoId} onClick={() => handleRedirect(video)}>
								<VideoCard video={video} filter={selectedFilter} />
							</div>
						)
					})}
				</VideoGrid>
			</FeedsBody>
		</FeedWrapper>
	)
}

export default Feeds

const Button = styled.button<{ selected: boolean; isDarkMode: boolean }>`
	font: inherit;
	cursor: pointer;
	font-weight: bold;
	padding: 0.5rem 1.1rem;
	border-radius: 34px;
	font-size: 1rem;
	height: 2.6rem;
	max-width: fit-content;

	/* Dynamic color and background based on dark mode and selection */
	color: ${({ selected, isDarkMode }) =>
		selected ? (isDarkMode ? 'black' : 'white') : isDarkMode ? '#aaa' : 'gray'};
	background-color: ${({ selected, isDarkMode }) =>
		selected
			? isDarkMode
				? 'white'
				: 'black'
			: isDarkMode
			? '#2c2c2c'
			: '#fff'};
	border: 1px solid
		${({ selected, isDarkMode }) =>
			selected
				? isDarkMode
					? 'white'
					: 'black'
				: isDarkMode
				? '#555'
				: '#cccccc'};

	transition: background-color 0.3s ease, color 0.3s ease;

	&:hover {
		background-color: ${({ selected, isDarkMode }) =>
			selected
				? isDarkMode
					? 'white'
					: 'black'
				: isDarkMode
				? '#333'
				: '#f2f2f2'};
		border: 1px solid
			${({ selected, isDarkMode }) =>
				selected
					? isDarkMode
						? 'white'
						: 'black'
					: isDarkMode
					? '#666'
					: '#f2f2f2'};
	}
`

const Heading = styled.div`
	display: flex;
	align-items: center;
	overflow: hidden;
	gap: 2.5rem;

	@media (max-width: 1200px) {
		display: none;
	}
`

const FeedWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 1rem 0;
	min-width: 34.375rem;
	margin-right: 1.2rem;
	margin-left: 1.2rem;

	@media (max-width: 42.375rem) {
		width: 100vw;
		min-width: 300px;
		padding: 0 1rem;
	}

	a {
		text-decoration: none;
		color: #555;
	}
`

const FeedsBody = styled.div`
	padding: 1rem 0;
`

const VideoGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
	grid-column-gap: 40px;
	grid-row-gap: 30px;
`

// empty div for auto scroll
// const ScrollToBottom = styled.div`
// 	padding-bottom: 200px;
// `
