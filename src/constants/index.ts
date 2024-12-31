// const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const GOOGLE_API_KEY = 'AIzaSyCiYQGeImQ5IJ9p15wkz_wi1altVFOe83Un'

export const YOUTUBE_API =
	'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&&key=' +
	GOOGLE_API_KEY

export const VIDEO_API =
	'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=' +
	GOOGLE_API_KEY +
	'&id='

export const YOUTUBE_SEARCH_API =
	'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&key=' +
	GOOGLE_API_KEY +
	'&q='

export const SEARCH_RESULT_API =
	'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=' +
	GOOGLE_API_KEY +
	'&q='

export const COMMENTS_API =
	'https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=' +
	GOOGLE_API_KEY +
	'&videoId='
