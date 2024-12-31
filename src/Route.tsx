import { Route, Routes, useLocation } from 'react-router'

import SignUpScreen from './screens/SignUpScreen'
import NotFoundScreen from './screens/NotFoundScreen'
import PrivateRoute from './components/PrivateRoute'
import HomeScreen from './screens/HomeScreen'
import VideoWatchScreen from './screens/VideoWatchScreen'

export default function RouteLayout() {
	const location = useLocation()

	return (
		<Routes key={location.pathname} location={location}>
			{/* Protected Routes */}
			<Route path="/" element={<PrivateRoute />}>
				<Route path="/" element={<HomeScreen />} />
			</Route>

			<Route path="/watch" element={<PrivateRoute />}>
				<Route path="/watch" element={<VideoWatchScreen />} />
			</Route>

			{/* Public Routes */}
			<Route path="/sign-in" element={<SignUpScreen />} />
			<Route path="*" element={<NotFoundScreen />} />
		</Routes>
	)
}

// /watch?v=9pHtygkRNuA
