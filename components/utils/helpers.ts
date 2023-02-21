import { API } from '@/helpers/axios';
import { LIMIT, OFFSET, URI, URL_FETCH } from './constants';

export const fetchQuests = (limit = LIMIT, offset = OFFSET) =>
	API.get(`${URI}?limit=${limit}&offset=${offset}`).then(({ data }) => data);

export const fetchQuest = (id: string) => API.get(`${URI}/${id}`).then(({ data }) => data);

export const getQuests = async (skip: number, limit: string | string[]) => {
	const getRes = await fetch(`${URL_FETCH}?skip=${skip}&limit=${limit}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((response) => response.json())
		.then((data) => data.products);

	if (getRes.code) {
		throw new Error('An error occurred while fetching the data');
	}

	return getRes.map((quest: any) => {
		return {
			id: quest.id,
			skillTree: quest.category.replace('-', ' '), // 'home-decoration' => 'home decoration'
			skill: quest.brand,
			title: quest.title,
			difficulty: Math.floor(quest.rating),
			experience: quest.stock * 100,
			gold: quest.price,
			type: '-',
			cover: quest.thumbnail
		};
	});
};

export const getQuest = async (id: string) => {
	const questRes = await fetch(`${URL_FETCH}/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((response) => response.json());

	if (questRes.code) {
		throw new Error('An error occurred while fetching the data');
	}

	return {
		id: questRes.id,
		skillTree: questRes.category.replace('-', ' '), // 'home-decoration' => 'home decoration'
		skill: questRes.brand,
		title: questRes.title,
		difficulty: Math.floor(questRes.rating),
		experience: questRes.stock * 100,
		gold: questRes.price,
		type: '-',
		cover: questRes.thumbnail,
		description: questRes.description,
		rewards: {
			experience: questRes.stock * 100,
			gold: questRes.price
		}
	};
};
