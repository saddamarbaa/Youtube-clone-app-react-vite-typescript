import React, {
	createContext,
	useContext,
	ReactNode,
	useState,
	useEffect,
} from 'react'
import {
	ThemeProvider as StyledThemeProvider,
	DefaultTheme,
} from 'styled-components'

// Define constants for the themes
const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

// Define the context type for the theme context
type Theme = 'light' | 'dark'

interface AppContextProps {
	theme: Theme
	toggleTheme: () => void
}

// Create the ThemeContext with default values
const ThemeContext = createContext<AppContextProps | undefined>(undefined)

// Define the theme structure for styled-components
const theme: Record<Theme, DefaultTheme> = {
	light: {
		backgroundColor: '#f9f9f9',
		textColor: '#333',
	},
	dark: {
		backgroundColor: '#333',
		textColor: '#fff',
	},
}

// Create the ThemeProvider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	// Retrieve theme from localStorage or default to LIGHT_THEME
	const [themeState, setTheme] = useState<Theme>(() => {
		const savedTheme = localStorage.getItem('app-theme')
		return savedTheme === DARK_THEME ? DARK_THEME : LIGHT_THEME
	})

	// Update theme in localStorage when it changes
	useEffect(() => {
		localStorage.setItem('app-theme', themeState)
	}, [themeState])

	const toggleTheme = () => {
		setTheme((prevTheme) =>
			prevTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME,
		)
	}

	return (
		<ThemeContext.Provider value={{ theme: themeState, toggleTheme }}>
			<StyledThemeProvider theme={theme[themeState]}>
				{children}
			</StyledThemeProvider>
		</ThemeContext.Provider>
	)
}

// Custom hook to access the ThemeContext
export const useThemeContext = (): AppContextProps => {
	const context = useContext(ThemeContext)

	if (!context) {
		throw new Error('useThemeContext must be used within a ThemeProvider')
	}

	return context
}
