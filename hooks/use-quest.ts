import { useQuery } from '@tanstack/react-query';
import { Q } from '@/components/utils/constants';
import { fetchQuest } from '@/components/utils/helpers';

const useQuest = (id: string) => {
	return useQuery({
		queryKey: [Q.QUEST, parseInt(id)],
		queryFn: () => fetchQuest(id),
		enabled: id.length > 0
	});
};

export { useQuest };
