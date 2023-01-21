import type { PageServerLoad } from './$types';
import { someApiLoad, someApiLoad2, someApiLoad3 } from '$lib/server/api';
import type { ApiData } from '../../types/data.type';
import { processApiResult } from '$lib/server/postprocessing';

export const load: PageServerLoad = async () => {
	// Create wrappers that return a Promise
	const loadApi = async () => {
		const data: ApiData = await someApiLoad();
		return processApiResult(data, 1000);
	};
	const loadApi2 = async () => {
		const data: ApiData = await someApiLoad2();
		return processApiResult(data, 3000);
	};
	const loadApi3 = async () => {
		return await someApiLoad3();
	};

	return {
		test: true,
		apiresult: loadApi(), // promise
		apiresult2: loadApi2(), // promise
		apiresult3: loadApi3() // promise
	};
};
