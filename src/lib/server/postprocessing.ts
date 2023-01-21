import type { ApiData } from '../../types/data.type';
import { setTimeout } from 'timers/promises';

export const processApiResult = (data: ApiData, time: number) => {
	// do something with data once it's been fetched if needed
	setTimeout(time);
	return data;
};
