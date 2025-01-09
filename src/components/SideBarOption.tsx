import React from 'react'
import styled from 'styled-components'
import { IconType } from 'react-icons'

import { useAppContext } from '../globalStates'
import { useThemeContext } from '../globalStates/contexts/ThemeContext'

interface OptionProps {
	Icon: IconType
	title: string
	color?: string
	search: string
}

const Option: React.FC<OptionProps> = ({ Icon, title, color, search }) => {
	const { updateFilter, state } = useAppContext()
	const filter = state.filter
	const { theme } = useThemeContext()
	const handleFilterClick = () => {
		if (search) {
			updateFilter(search)
		}
	}

	return (
		<SideBarOptionWrapper
			selected={filter == search}
			onClick={handleFilterClick}
			theme={theme}>
			<IconWrapper theme={theme}>
				<Icon
					style={{
						color: theme === 'dark' ? 'white' : color || 'gray',
						fontSize: '2rem',
						marginRight: '1rem',
						width: '1.7rem',
						height: '1.8rem',
					}}
				/>
			</IconWrapper>
			<div className="relative-div">
				<p>{title}</p>
			</div>
		</SideBarOptionWrapper>
	)
}

export default Option

// Add a selected prop to change styles when active
const SideBarOptionWrapper = styled.div<{ selected?: boolean; theme: string }>`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 0.5rem;
	transition: 0.3s;
	background-color: ${({ selected, theme }) =>
		selected
			? theme === 'dark'
				? 'rgba(220, 227, 232, 0.5)' // Slightly darker blue for dark mode
				: 'rgba(0, 120, 215, 0.15)' // Lighter blue for light mode
			: 'transparent'};
	border-left: ${({ selected, theme }) =>
		selected
			? theme === 'dark'
				? '4px solid rgba(0, 120, 215, 0.8)' // Stronger blue for dark mode
				: '4px solid rgba(0, 120, 215, 1)' // Normal blue for light mode
			: 'none'};
	&:hover {
		background-color: ${({ theme }) =>
			theme === 'dark'
				? 'rgba(220, 227, 232, 0.5)' // Dark gray hover color for dark mode
				: 'rgba(220, 227, 232, 0.5)'}; // Light gray hover color for light mode
	}
	color: ${({ theme }) =>
		theme === 'dark'
			? '#fff'
			: '#000'}; // White text in dark mode, black in light mode
`

const IconWrapper = styled.div<{ theme?: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 1rem;
	cursor: pointer;
	color: ${({ theme }) =>
		theme === 'dark' ? '#fff' : '#000'}; // Icon color depending on the theme
	transition: color 0.3s ease;

	&:hover {
		color: ${({ theme }) =>
			theme === 'dark'
				? '#ccc'
				: '#555'}; // Light gray in dark mode, dark gray in light mode
	}
`
