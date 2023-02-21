import { Cinzel, Lato } from '@next/font/google';

export const LIMIT = 6;
export const OFFSET = 0;
export const URI = '/api/quests';
export const URL_FETCH = 'https://dummyjson.com/products';

export const Q = {
	QUESTS: 'quests',
	QUEST: 'getQuest'
};

export const cinzel = Cinzel({ subsets: ['latin'], weight: ['700'] });
export const lato = Lato({ subsets: ['latin'], weight: ['400'] });

export const difficultyArray = new Array(5).fill(0);
