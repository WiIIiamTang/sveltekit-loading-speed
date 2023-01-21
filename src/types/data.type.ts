export type Data = {
	test: boolean;
	apiresult?: {
		apiData: ApiData;
		processedData?: ProcessedData;
	};
	apiresult2?: {
		apiData: ApiData;
		processedData?: ProcessedData;
	};
	apiresult3?: {
		apiData: ApiData;
		processedData?: ProcessedData;
	};
};

export type ApiData = {
	started_loading: string;
	done_loading: string;
	response: string;
};

export type ProcessedData = {
	started_processing: string;
	done_processing: string;
	response: string;
	time: number;
};
