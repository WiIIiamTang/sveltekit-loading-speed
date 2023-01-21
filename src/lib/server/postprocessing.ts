import { setTimeout } from 'timers/promises';
import type { ApiData } from '../../types/data.type';

export const processApiResult = async (data: ApiData, time: number) => {
	// do something with data once it's been fetched if needed
	// does not necessarily need to be async, this is just so that the datetimes are accurate on the display
	const started_processing = new Date(Date.now()).toUTCString();
	const response = await setTimeout(
		time,
		data.response +
			': processed! ' +
			"I'm supposed to take " +
			time +
			"ms to process. The page can't display until I'm done."
	);

	const done_processing = new Date(Date.now()).toUTCString();

	return {
		apiData: data,
		processedData: {
			started_processing,
			done_processing,
			response,
			time: time
		}
	};
};
