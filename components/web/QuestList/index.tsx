import { LIMIT, OFFSET } from '@/components/utils/constants';
import { Quest } from '@/helpers/interfaces';
import { useQuests } from '../../../hooks/use-quests';
import TheQuest from '../TheQuest';
import { Wrapper } from './styles';

export const QuestList = () => {
	const { data, isLoading, isError } = useQuests(LIMIT, OFFSET);

	if (isLoading) return <div>Loading</div>;
	if (isError) return <div>Error</div>;

	return (
		<Wrapper>
			{data?.map((quest: Quest) => (
				<TheQuest quest={quest} key={quest.id} />
			))}
		</Wrapper>
	);
};
