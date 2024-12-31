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

import Option from './SideBarOption'
import { Link } from 'react-router'

const SideBar: React.FC = () => {
	return (
		<SideBarWrapper>
			<div id="fixed-position">
				<SideBarBody>
					<div className="body-head">
						<Link to={'/'}>
							<Option Icon={FaHome} title="Home" />
						</Link>
						<Option Icon={FaExchangeAlt} title="Explore" />
						<Option Icon={FaVideo} title="Subscriptions" />
					</div>
					<div className="body-head">
						<Option Icon={FaVideo} title="Library" />
						<Option Icon={FaClock} title="History" />
						<Option Icon={FaVideo} title="Your Videos" />
						<Option Icon={FaClock} title="Watch Later" />
						<Option Icon={FaThumbsUp} title="Like" />
					</div>

					<Option Icon={FaTv} title="Live Videos" />

					<Option Icon={FaListAlt} title="Most Recently" />
					<Option Icon={FaUsers} title="Group" />
					<Option Icon={FaStore} title="MarketPlace" />

					<Option Icon={FaVideo} title="Watch" />

					<Option Icon={FaClock} title="Memories" />
					<Option Icon={FaBookmark} title="Saved" />
					<Option Icon={FaFlag} title="Pages" />
					<Option Icon={FaHeart} title="Covid19 Information" />
					<Option Icon={FaCalendarAlt} title="Events" />
					<Option Icon={FaBriefcase} title="Jobs" />

					<Option Icon={FaChartBar} title="Ads Manager" />

					<Option Icon={FaPaperPlane} title="Campus" />

					<Option Icon={FaStar} title="Favorites" />

					<Option Icon={FaUserFriends} title="Friends List" />
					<Option Icon={FaGamepad} title="Video Games" />

					<Option Icon={FaCog} title="Messenger Kid" />
					<Option Icon={FaSun} title="Weather" />
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
