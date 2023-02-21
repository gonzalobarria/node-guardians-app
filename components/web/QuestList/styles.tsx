import { darkTheme } from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-gap: 24px;

	padding: 10px;
	max-width: 1024px;
	margin: 0 auto;
	margin-top: 132px;

	@media (min-width: 720px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1000px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
