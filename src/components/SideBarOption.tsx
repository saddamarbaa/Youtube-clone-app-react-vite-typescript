import React from 'react'
import styled from 'styled-components'
import { IconType } from 'react-icons'

interface OptionProps {
	Icon: IconType
	title: string
	color?: string
	option?: unknown
}

const Option: React.FC<OptionProps> = ({ Icon, title, color }) => {
	return (
		<SideBarOptionWrapper>
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

const SideBarOptionWrapper = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 0.5rem;
	transition: 0.3s;
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
