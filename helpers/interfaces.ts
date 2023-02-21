import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface Quest {
	id: number;
	skillTree: string;
	skill: string;
	title: string;
	difficulty: number;
	experience: number;
	gold: number;
	type: string;
	cover: string;
	description?: string;
	rewards?: {
		experience: number;
		gold: number;
	};
}

export interface Modal {
	theQuest: Quest;
	onClose: () => void;
}

export interface TheModal {
	children: ReactNode;
}

export interface TheQuest {
	quest: Quest;
}

export interface SubSection {
	title: string;
	desc?: string | number;
	color?: string;
	difficulty?: number;
}
