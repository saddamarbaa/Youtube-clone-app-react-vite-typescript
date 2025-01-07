import styled from 'styled-components'

import {
	FaHome,
	FaExchangeAlt,
	FaVideo,
	FaClock,
	FaThumbsUp,
	FaTv,
	FaListAlt,
	FaUsers,
	FaStore,
	FaBookmark,
	FaFlag,
	FaHeart,
	FaCalendarAlt,
	FaBriefcase,
	FaChartBar,
	FaPaperPlane,
	FaStar,
	FaUserFriends,
	FaGamepad,
	FaCog,
	FaSun,
} from 'react-icons/fa'
import { Link } from 'react-router'

import Option from './SideBarOption'

const SideBar: React.FC = () => {
	return (
		<SideBarWrapper>
			<div id="fixed-position">
				<SideBarBody>
					<div className="body-head">
						<Link to={'/'}>
							<Option
								Icon={FaHome}
								title="Home"
								search="home videos trending, sport"
							/>
						</Link>
						<Option
							Icon={FaExchangeAlt}
							title="Explore"
							search="home videos trending"
						/>
						<Option
							Icon={FaVideo}
							title="Subscriptions"
							search="subscriptions latest uploads"
						/>
					</div>
					<div className="body-head">
						<Option
							Icon={FaVideo}
							title="Library"
							search="library saved videos"
						/>
						<Option
							Icon={FaClock}
							title="History"
							search="video watch history"
						/>
						<Option
							Icon={FaVideo}
							title="Your Videos"
							search="your uploaded videos"
						/>
						<Option
							Icon={FaClock}
							title="Watch Later"
							search="videos watch later"
						/>
						<Option
							Icon={FaThumbsUp}
							title="Liked Videos"
							search="liked videos and playlists"
						/>
					</div>

					<Option
						Icon={FaTv}
						title="Live Videos"
						search="live streams news sports"
					/>
					<Option
						Icon={FaListAlt}
						title="Most Recently"
						search="recently watched videos"
					/>
					<Option
						Icon={FaUsers}
						title="Group"
						search="community group videos"
					/>
					<Option
						Icon={FaStore}
						title="MarketPlace"
						search="shopping marketplace items"
					/>
					<Option
						Icon={FaVideo}
						title="Watch"
						search="watch recommended videos"
					/>
					<Option
						Icon={FaClock}
						title="Memories"
						search="video memories personal moments"
					/>
					<Option
						Icon={FaBookmark}
						title="Saved"
						search="saved playlists and videos"
					/>
					<Option
						Icon={FaFlag}
						title="Pages"
						search="your pages and subscriptions"
					/>
					<Option
						Icon={FaHeart}
						title="Covid19 Information"
						search="covid-19 updates and news"
					/>
					<Option
						Icon={FaCalendarAlt}
						title="Events"
						search="upcoming live events"
					/>
					<Option
						Icon={FaBriefcase}
						title="Jobs"
						search="job opportunities videos"
					/>
					<Option
						Icon={FaChartBar}
						title="Ads Manager"
						search="manage ads campaigns youtube"
					/>
					<Option
						Icon={FaPaperPlane}
						title="Campus"
						search="university videos and updates"
					/>
					<Option
						Icon={FaStar}
						title="Favorites"
						search="your favorite videos and playlists"
					/>
					<Option
						Icon={FaUserFriends}
						title="Friends List"
						search="videos from friends"
					/>
					<Option
						Icon={FaGamepad}
						title="Video Games"
						search="gaming videos and live streams"
					/>
					<Option
						Icon={FaCog}
						title="Messenger Kid"
						search="messenger kids app"
					/>
					<Option
						Icon={FaSun}
						title="Weather"
						search="weather forecasts and updates"
					/>
				</SideBarBody>
			</div>
		</SideBarWrapper>
	)
}

export default SideBar

const SideBarWrapper = styled.div`
	flex: 0.3;
	min-height: 100%;
	max-width: 17rem;
	min-width: 15rem;
	padding: 0.5rem 0;

	@media (max-width: 42.375rem) {
		display: none;
	}

	#fixed-position {
		position: fixed;
		max-width: 17rem;
		min-width: 15rem;
	}
`

const SideBarBody = styled.div`
	.body-head {
		padding-bottom: 0.5rem;
		margin-bottom: 0.5rem;
		border-bottom: 1px solid rgba(220, 227, 232);
	}

	max-height: 85vh;
	overflow: hidden !important;

	&:hover {
		overflow-y: auto !important;
	}
`
