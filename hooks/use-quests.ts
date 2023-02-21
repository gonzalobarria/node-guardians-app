import { useQuery } from '@tanstack/react-query';
import { Q } from '@/components/utils/constants';
import { fetchQuests } from '@/components/utils/helpers';

const useQuests = (limit: number, offset: number) => {
	return useQuery({
		queryKey: [Q.QUESTS, limit, offset],
		queryFn: () => fetchQuests(limit, offset)
	});
};

export { useQuests };
