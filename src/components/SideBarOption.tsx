import React from 'react'
import styled from 'styled-components'
import { IconType } from 'react-icons'

import { useAppContext } from '../globalStates'

interface OptionProps {
	Icon: IconType
	title: string
	color?: string
	search: string
}

const Option: React.FC<OptionProps> = ({ Icon, title, color, search }) => {
	const { updateFilter, state } = useAppContext()
	const filter = state.filter

	const handleFilterClick = () => {
		if (search) {
			updateFilter(search)
		}
	}

	return (
		<SideBarOptionWrapper
			selected={filter == search}
			onClick={handleFilterClick}>
			<IconWrapper>
				<Icon
					style={{
						color: color || 'gray',
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
const SideBarOptionWrapper = styled.div<{ selected?: boolean }>`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 0.5rem;
	transition: 0.3s;
	background-color: ${({ selected }) =>
		selected ? 'rgba(0, 120, 215, 0.15)' : 'transparent'};
	border-left: ${({ selected }) =>
		selected ? '4px solid rgba(0, 120, 215, 1)' : 'none'};
	&:hover {
		background-color: rgba(220, 227, 232, 0.5);
	}
`

const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 1rem;
	cursor: pointer;
`
