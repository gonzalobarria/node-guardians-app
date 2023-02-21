import { darkTheme } from '@/styles/theme';
import styled from 'styled-components';

export const StyledModal = styled.div`
	background-color: ${darkTheme.colors.lighterBlack};
	width: 755px;
	border-radius: 15px;

	@media (max-width: 480px) {
		margin: 10px;
		min-width: 380px;
		width: 100%;
	}
`;
export const StyledModalOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);

	overflow-y: auto;
	overflow-x: hidden;
	position: fixed;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	z-index: 50;
`;
