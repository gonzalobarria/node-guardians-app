import Head from 'next/head';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { QuestList } from '@/components/web/QuestList';
import { LIMIT, OFFSET, Q } from '@/components/utils/constants';
import { getQuests } from '@/components/utils/helpers';
import Image from 'next/image';

import logo from '@/public/logo.svg';
import styled from 'styled-components';

export default function Home() {
	return (
		<>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>

			<Wrapper>
				<Image src={logo} alt='Node Guardians' sizes='(max-width: 768px) 100vw' />
				<QuestList />
			</Wrapper>
		</>
	);
}

export async function getStaticProps() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: [Q.QUESTS, LIMIT, OFFSET],
		queryFn: () => getQuests(OFFSET, LIMIT.toString())
	});

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	};
}

const Wrapper = styled.div`
	max-width: 1440px;
	margin: 0 auto;
`;
