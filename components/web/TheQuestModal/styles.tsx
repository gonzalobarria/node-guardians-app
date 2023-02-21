import { darkTheme, defaultTheme } from '@/styles/theme';
import styled from 'styled-components';

export const QuestWrapper = styled.div`
	background-color: ${darkTheme.colors.lighterBlack};
	padding: 6px 6px 25px 6px;
	border-radius: ${defaultTheme.radius.xl};
	border: 1px solid rgba(58, 58, 58, 0.5);
	margin: 0 auto;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding: 0 6px;

	@media screen and (max-width: 480px) {
		flex-direction: column;
	}
`;

export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 10px 0;
	justify-content: center;

	@media (max-width: 400px) {
		margin: 18px 0;
	}
`;

export const Title = styled.h2`
	font-size: 20px;
	line-height: 19px;
	text-transform: capitalize;
	color: ${darkTheme.colors.white};
	text-align: center;
	padding: 0 10px;
	margin: 0;
`;

export const MiniWrapper = styled.div`
	width: 50%;
	font-size: 14px;

	@media screen and (max-width: 480px) {
		width: 100%;
	}
`;

export const ImageContainer = styled.div`
	position: relative;
	overflow: hidden !important;
	height: 270px;
	border-radius: ${defaultTheme.radius.l} ${defaultTheme.radius.l} 0 0;
`;

export const CloseWrapper = styled.div`
	position: absolute;
	z-index: 20;
	right: 12px;
	top: 10px;
	cursor: pointer;
`;

export const DescriptionWrapper = styled.p`
	padding: 0 6px;
	color: ${darkTheme.colors.grey};
	font-size: 14px;
	min-height: 100px;
	margin-bottom: 20px;
`;

export const BottomWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 6px;
`;

export const LeftWrapper = styled.div``;
export const BoxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid ${darkTheme.colors.gold};
	background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(7, 15, 29, 1) 100%);
	width: 60px;
	height: 60px;
`;

export const ExpLogoWrapper = styled.div`
	height: 50%;
	color: white;
	display: flex;
	justify-content: center;
	position: relative;
`;

export const ExpLogo = styled.div`
	position: absolute;
	top: 13px;
	font-size: 14px;
`;

export const ExpWrapper = styled.div`
	height: 50%;

	color: ${darkTheme.colors.white};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 8px;
`;

export const RewardsWrapper = styled.div`
	font-weight: bold;
	font-size: 14px;
	color: ${darkTheme.colors.white};
	text-transform: uppercase;
	margin-bottom: 7px;
`;

export const RightWrapper = styled.div`
	position: relative;
`;

export const Button = styled.button`
	font-size: 12px;
	padding: 10px 20px;
	border-radius: 2.5px;
	background-color: transparent;

	color: ${darkTheme.colors.white};
	border: 1px solid ${darkTheme.colors.gold};
	position: absolute;
	bottom: 0;
	right: 0;
	width: 100px;

	&:hover {
		background-color: ${darkTheme.colors.gold};
		color: ${darkTheme.colors.lighterBlack};
	}
`;

export const LineWrapper = styled.div`
	@media (max-width: 600px) {
		display: none;
	}
`;
