import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppProvider } from './globalStates/index.ts'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from './globalStates/contexts/ThemeContext.tsx'

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<AppProvider>
				<QueryClientProvider client={queryClient}>
					<BrowserRouter>
						<App />
						<ReactQueryDevtools
						// initialIsOpen
						// position="right"
						// buttonPosition="bottom-right"
						/>
					</BrowserRouter>
				</QueryClientProvider>
			</AppProvider>
		</ThemeProvider>
	</StrictMode>,
)
