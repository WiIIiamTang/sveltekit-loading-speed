export type Data = {
	test: boolean;
	apiresult?: ApiData;
	apiresult2?: ApiData;
	apiresult3?: ApiData;
};

export type ApiData = {
	started_loading: string;
	response: string;
};
