import type { PageServerLoad } from './$types';
import { someApiLoad, someApiLoad2, someApiLoad3 } from '$lib/server/api';
import type { ApiData } from '../../types/data.type';
import { processApiResult } from '$lib/server/postprocessing';

export const load: PageServerLoad = async () => {
	// In contrast with the slow page.server.ts load, this creates wrappers that return a Promise around the orginal calls

	const loadApi = async () => {
		const data: ApiData = await someApiLoad();
		return await processApiResult(data, 1000); // process data needed for your page, blocking
	};
	const loadApi2 = async () => {
		const data: ApiData = await someApiLoad2();
		return await processApiResult(data, 2000); // process data needed for your page, blocking
	};
	const loadApi3 = async () => {
		const data: ApiData = await someApiLoad3();
		return await processApiResult(data, 0); // process data needed for your page, blocking
	};

	return {
		test: true,
		apiresult: loadApi(), // promise
		apiresult2: loadApi2(), // promise
		apiresult3: loadApi3() // promise
	};
};
