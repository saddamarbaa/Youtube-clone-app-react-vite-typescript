import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query'

import Feeds from '../components/feeds'
import SideBar from '../components/sideBar'
import Layout from '../layouts'

import { fetchVideos } from '../utils/api'
import ShimmerLoader from '../components/ShimmerLoader'
// import ErrorCard from '../components/ErrorCard'
import { mockVideos } from '../utils/mockData'
import { useAppContext } from '../globalStates'

export default function HomeScreen() {
	// const [searchParams] = useSearchParams()
	// const filter = searchParams.get('filter')
	const { state } = useAppContext()

	const filter = state.filter

	console.log('Filter from context:', state.filter)

	const {
		data: videos,
		isLoading,
		// error,
	} = useQuery({
		queryKey: ['videos', filter],
		queryFn: () => fetchVideos(filter),
		// enabled: false,
	})

	if (isLoading) return <ShimmerLoader />

	return (
		<Layout>
			<AppBodyWrapper>
				<SideBar />
				<Feeds videos={videos || mockVideos} />

				{/* {error instanceof Error && (
					<ErrorCard
						message={
							error?.message ||
							'Oops! Something went wrong. Please try again later.'
						}
					/>
				)} */}
			</AppBodyWrapper>
		</Layout>
	)
}

const AppBodyWrapper = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 100%;
	align-items: stretch;
	/* max-width: 90.75rem; */
	overflow: hidden;
	margin: 0 auto;
	padding: 0 1rem;
`
