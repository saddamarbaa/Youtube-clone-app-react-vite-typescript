import React, { createContext, useReducer, useContext, ReactNode } from 'react'

// Define the state shape for the app context
type AppState = {
	filter: string
	search: string
}

// Define the action types as constants
const SET_FILTER = 'SET_FILTER'
const SET_SEARCH = 'SET_SEARCH'

// Define the possible actions for the app state
type AppAction =
	| { type: typeof SET_FILTER; payload: string }
	| { type: typeof SET_SEARCH; payload: string }

// Define the context type
type AppContextProps = {
	state: AppState
	updateFilter: (filter: string) => void
	updateSearch: (search: string) => void
}

// Create the AppContext
const AppContext = createContext<AppContextProps>({
	state: {
		filter: '',
		search: '',
	},
	updateFilter: () => {},
	updateSearch: () => {},
})

// Define the reducer function to handle state updates
const appReducer = (state: AppState, action: AppAction): AppState => {
	switch (action.type) {
		case SET_FILTER:
			return {
				...state,
				filter: action.payload,
			}
		case SET_SEARCH:
			return {
				...state,
				search: action.payload,
			}
		default:
			return state
	}
}

// Create the AppProvider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	// Set the initial state
	const initialState: AppState = {
		filter: '',
		search: '',
	}

	// Use the appReducer with the initial state
	const [state, dispatch] = useReducer(appReducer, initialState)

	// Define the setFilter action
	const updateFilter = (filter: string) => {
		dispatch({ type: SET_FILTER, payload: filter })
	}

	// Define the setSearch action
	const updateSearch = (search: string) => {
		dispatch({ type: SET_SEARCH, payload: search })
	}

	// Create the appContextValue object
	const appContextValue: AppContextProps = {
		state,
		updateFilter,
		updateSearch,
	}

	// Provide the appContextValue to the children components
	return (
		<AppContext.Provider value={appContextValue}>
			{children}
		</AppContext.Provider>
	)
}

// Custom hook to access the AppContext
export const useAppContext = () => useContext(AppContext)
