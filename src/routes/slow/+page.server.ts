import type { PageServerLoad } from './$types';
import { someApiLoad, someApiLoad2, someApiLoad3 } from '$lib/server/api';
import { processApiResult } from '$lib/server/postprocessing';

export const load: PageServerLoad = async () => {
	// Resolves all promises to data objects
	const data1 = await someApiLoad();
	const apiresult = await processApiResult(data1, 1000);

	const data2 = await someApiLoad2();
	const apiresult2 = await processApiResult(data2, 2000);

	const data3 = await someApiLoad3();
	const apiresult3 = await processApiResult(data3, 0);

	return {
		test: true,
		apiresult: apiresult, // object
		apiresult2: apiresult2, // object
		apiresult3: apiresult3 // object
	};

	/**
	 * Same as
	 *
	 * return {
	 * 	test: true,
	 *  apiresult: await processApiResult(await someApiLoad(), 1000),
	 *  apiresult2: await processApiResult(await someApiLoad2(), 2000),
	 *  apiresult3: await processApiResult(await someApiLoad3(), 0)
	 * }
	 *
	 */
};
