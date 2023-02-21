import { darkTheme, defaultTheme } from '@/styles/theme';
import styled from 'styled-components';

export const QuestWrapper = styled.div`
	background-color: ${darkTheme.colors.lighterBlack};
	padding: 6px;
	border-radius: ${defaultTheme.radius.xl};
	border: 1px solid rgba(58, 58, 58, 0.5);
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding: 0 6px;

	@media screen and (max-width: 480px) {
		flex-direction: column;
	}
`;

export const Title = styled.h2`
	font-size: 14px;
	line-height: 19px;
	text-transform: capitalize;
	color: ${darkTheme.colors.white};
	margin-top: ${defaultTheme.spacing['5xs']};
	margin-bottom: ${defaultTheme.spacing['4xs']};
	padding-left: 6px;
`;

export const MiniWrapper = styled.div`
	width: 50%;
	font-size: 12px;

	@media screen and (max-width: 480px) {
		width: 100%;
	}
`;

export const ImageContainer = styled.div`
	position: relative;
	overflow: hidden !important;
	height: 106.11px;
	border-radius: ${defaultTheme.radius.l};
`;
