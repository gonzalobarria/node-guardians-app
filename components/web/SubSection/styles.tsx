import { darkTheme } from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	color: ${darkTheme.colors.gold};
	padding-bottom: 10px;
	text-transform: capitalize;
`;
export const Title = styled.div`
	width: 40%;
	min-width: 80px;
`;

export const Description = styled.div`
	width: 60%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: ${(props) => props.color ?? darkTheme.colors.white};
`;

export const Icon = styled.svg`
	flex: none;
	transition: fill 0.25s;
	width: 11px;
	height: 11px;
	fill: ${(props) => (props.color === 'true' ? darkTheme.colors.gold : darkTheme.colors.grey)};
	opacity: ${(props) => (props.color === 'true' ? '100%' : '30%')};
`;
