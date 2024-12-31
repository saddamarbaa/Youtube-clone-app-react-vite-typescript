import {
	COMMENTS_API,
	GOOGLE_API_KEY,
	VIDEO_API,
	YOUTUBE_API,
} from '../../constants'
import { YouTubeVideo, YouTubeVideoComment } from '../../types'

export const fetchVideos = async (
	filter: string | null,
): Promise<YouTubeVideo[]> => {
	const YOUTUBE_API_POPULAR = YOUTUBE_API

	let url = YOUTUBE_API_POPULAR

	if (filter) {
		url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${filter}&key=${GOOGLE_API_KEY}&maxResults=50`
	}

	const response = await fetch(url)

	if (!response.ok) {
		const message = `An error has occurred: ${response.status}`
		throw new Error(message)
	}

	const json = await response.json()
	const data: YouTubeVideo[] = json.items || []

	return data
}

export const fetchVideo = async (
	videoId: string | null,
): Promise<YouTubeVideo | undefined> => {
	const response = await fetch(VIDEO_API + videoId)
	if (!response.ok) {
		const message = `An error has occurred: ${response.status}`
		throw new Error(message)
	}

	const json = await response.json()
	const data: YouTubeVideo[] = json.items
	return data.length ? data[0] : undefined
}

export const fetchRelatedVideos = async (
	filter: string | null,
): Promise<YouTubeVideo[]> => {
	const TOP_RELATED_API =
		'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=GB&&key=' +
		GOOGLE_API_KEY

	let url = TOP_RELATED_API

	if (filter) {
		url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${filter}&key=${GOOGLE_API_KEY}&maxResults=50`
	}

	const response = await fetch(url)

	if (!response.ok) {
		const message = `An error has occurred: ${response.status}`
		throw new Error(message)
	}

	const json = await response.json()
	const data: YouTubeVideo[] = json.items || []

	return data.filter((video) => {
		return video.kind === 'youtube#video'
	})
}

export const fetchComments = async (
	videoId: string,
): Promise<YouTubeVideoComment[]> => {
	const response = await fetch(COMMENTS_API + videoId)
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	const data = await response.json()

	return data.items
}

export const fetchYouTubeSuggestions = async (
	query: string,
): Promise<{ value: string; key: string }[]> => {
	const response = await fetch(
		`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${GOOGLE_API_KEY}&maxResults=50`,
	)

	if (!response.ok) throw new Error('Error fetching suggestions')

	const json = await response.json()
	const data: YouTubeVideo[] = json.items || []
	return data.map((item) => {
		const videoId =
			typeof item.id === 'object' && item.id !== null
				? item.id.videoId
				: item.id

		return {
			value: item.snippet.title || item.snippet?.channelTitle || '',
			key: videoId,
		}
	})
}
