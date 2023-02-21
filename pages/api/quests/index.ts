import { LIMIT, OFFSET } from '@/components/utils/constants';
import { getQuests } from '@/components/utils/helpers';
import { Quest } from '@/helpers/interfaces';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		let { limit, offset } = req.query;
		limit ||= LIMIT.toString();
		offset ||= `${OFFSET}`;

		let skip = OFFSET;
		if (typeof offset === 'string' && typeof limit === 'string')
			skip = offset === '0' ? 0 : parseInt(offset) * parseInt(limit);

		const formattedToQuests: Quest[] = await getQuests(skip, limit);

		res.status(200).json(formattedToQuests);
	} catch (error) {
		// If the request fails, an error will be thrown
		console.error(error);

		// Send an error response back to the client
		res.status(500).json('An error occurred while fetching the data');
	}
}
