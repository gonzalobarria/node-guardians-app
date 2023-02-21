import { LIMIT, OFFSET, Q } from '@/components/utils/constants';
import { getQuest, getQuests } from '@/components/utils/helpers';
import Modal from '@/components/utils/Modal';
import TheQuestModal from '@/components/web/TheQuestModal';
import { useQuest } from '@/hooks/use-quest';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export default function Quest() {
	const router = useRouter();
	const questID = typeof router.query?.id === 'string' ? router.query.id : '';
	const { data: quest, isSuccess } = useQuest(questID);

	return (
		<>
			<Modal>{isSuccess && <TheQuestModal theQuest={quest} onClose={() => router.push('/')} />}</Modal>
			<div id='modal-root'></div>
		</>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id as string;
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery([Q.QUEST, parseInt(id)], () => getQuest(id));

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const quests = await getQuests(OFFSET, LIMIT.toString());

	const paths = quests?.map((item: any) => {
		const id = item.id.toString();

		return { params: { id } };
	});

	return { paths, fallback: true };
};
