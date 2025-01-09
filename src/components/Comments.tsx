import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query'

import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import moment from 'moment'
import { kFormatter } from '../utils/helpers'
import { fetchComments } from '../utils/api'
import { mockComments } from '../utils/mockData'
import { useThemeContext } from '../globalStates/contexts/ThemeContext'

const Comments = ({ videoId }: { videoId: string }) => {
	const { theme } = useThemeContext() // Fetch the current theme
	const isDarkTheme = theme === 'dark' // Convert to boolean

	const { data, isLoading, error } = useQuery({
		queryKey: ['comments', videoId],
		queryFn: () => fetchComments(videoId),
		staleTime: 1000 * 60 * 5,
		enabled: !!videoId,
	})

	if (isLoading) return <div>Loading comments...</div>
	if (error instanceof Error) return <div>Error: {error.message}</div>

	const comments = data || mockComments

	return (
		<CommentContainer isDarkTheme={isDarkTheme}>
			<p>{comments?.length} Comments</p>
			{comments?.map((comment) => {
				const {
					authorDisplayName,
					authorProfileImageUrl,
					textDisplay,
					publishedAt,
					likeCount,
				} = comment?.snippet?.topLevelComment?.snippet

				return (
					<CommentWrapper key={comment?.id}>
						<AuthorImage src={authorProfileImageUrl} alt="author" />
						<CommentContent>
							<AuthorInfo>
								<AuthorName isDarkTheme={isDarkTheme}>
									{authorDisplayName}
								</AuthorName>
								<PublishedAt isDarkTheme={isDarkTheme}>
									{moment(publishedAt).fromNow()}
								</PublishedAt>
							</AuthorInfo>
							<CommentText isDarkTheme={isDarkTheme}>{textDisplay}</CommentText>
							<ActionsWrapper>
								<AiOutlineLike />
								{kFormatter(likeCount)}
								<AiOutlineDislike />
							</ActionsWrapper>
						</CommentContent>
					</CommentWrapper>
				)
			})}
		</CommentContainer>
	)
}

// Styled components with dark/light theme handling
const CommentContainer = styled.div<{ isDarkTheme: boolean }>`
	display: flex;
	flex-direction: column;
	gap: 16px;
	color: ${({ isDarkTheme }) =>
		isDarkTheme ? '#fff' : '#000'}; // Adjust text color for theme
`

const CommentWrapper = styled.div`
	display: flex;
	gap: 16px;
	margin-bottom: 16px;
`

const AuthorImage = styled.img`
	border-radius: 50%;
	height: 40px;
	width: 40px;
`

const CommentContent = styled.div`
	display: flex;
	flex-direction: column;
`

const AuthorInfo = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`

const AuthorName = styled.h3<{ isDarkTheme: boolean }>`
	font-size: 16px;
	font-weight: 600;
	color: ${({ isDarkTheme }) =>
		isDarkTheme ? '#ddd' : '#374151'}; /* Adjust for dark/light mode */
`

const PublishedAt = styled.p<{ isDarkTheme: boolean }>`
	font-size: 12px;
	color: ${({ isDarkTheme }) =>
		isDarkTheme ? '#aaa' : '#6b7280'}; /* Adjust for dark/light mode */
`

const CommentText = styled.p<{ isDarkTheme: boolean }>`
	font-size: 14px;
	color: ${({ isDarkTheme }) =>
		isDarkTheme ? '#eee' : '#000'}; /* Adjust for dark/light mode */
`

const ActionsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`

export default Comments
