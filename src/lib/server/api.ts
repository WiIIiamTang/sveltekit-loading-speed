import { setTimeout } from 'timers/promises';

export const someApiLoad = async () => {
	const started_loading = new Date(Date.now()).toUTCString();

	// some async operation
	// const response = await fetch(apiUrl, { method: 'GET' })
	const response = await setTimeout(1000, 'Hello from api');

	const done_loading = new Date(Date.now()).toUTCString();

	return {
		started_loading,
		done_loading,
		response
	};
};

export const someApiLoad2 = async () => {
	const started_loading = new Date(Date.now()).toUTCString();

	// some async operation
	// const response = await fetch(apiUrl, { method: 'GET' })
	const response = await setTimeout(2000, 'Hello from api2');

	const done_loading = new Date(Date.now()).toUTCString();

	return {
		started_loading,
		done_loading,
		response
	};
};

export const someApiLoad3 = async () => {
	const started_loading = new Date(Date.now()).toUTCString();

	// some async operation
	// const response = await fetch(apiUrl, { method: 'GET' })
	const response = await setTimeout(3000, 'Hello from api3');

	const done_loading = new Date(Date.now()).toUTCString();

	return {
		started_loading,
		done_loading,
		response
	};
};
