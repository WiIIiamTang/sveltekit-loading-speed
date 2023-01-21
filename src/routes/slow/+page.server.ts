import type { PageServerLoad } from './$types';
import { someApiLoad, someApiLoad2, someApiLoad3 } from '$lib/server/api';

export const load: PageServerLoad = async () => {
	return {
		test: true,
		apiresult: await someApiLoad(), // resolves to Data object
		apiresult2: await someApiLoad2(), // resolves to Data object
		apiresult3: await someApiLoad3() // resolves to Data object
	};
};
