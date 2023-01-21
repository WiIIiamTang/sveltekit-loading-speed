# SvelteKit server loading with Promise unwrapping

An example showcasing SvelteKit's [Promise unwrapping](https://kit.svelte.dev/docs/load#promise-unwrapping).

## Slow load

If you need to fetch data from some api to feed into your components, one way is to make those requests in your `load` function.

```ts
export const load: PageServerLoad = async () => {
	// Resolves all promises to data objects
	const data1 = await someApiLoad();
	const apiresult = await processApiResult(data1, 1000);

	const data2 = await someApiLoad2();
	const apiresult2 = await processApiResult(data2, 2000);

	const data3 = await someApiLoad3();
	const apiresult3 = await processApiResult(data3, 0);

	return {
		apiresult: apiresult, // object
		apiresult2: apiresult2, // object
		apiresult3: apiresult3 // object
	};
};
```

The code snippet above shows multiple api requests being made, plus some data processing if necessary.

The problem with this approach is that each request will resolve one after the other (a "waterfall" loading). The total time a user will have to wait for the page to load will be the sum of all the requests.

```
Req 1 -> Done
         Req 2 --> Done
                   Req 3 ---> Done
                              Page loads
```

## Promise unwrapping

SvelteKit allows you return multiple promises without creating such a waterfall:

```ts
export const load: PageServerLoad = async () => {
	// In contrast with the slow page.server.ts load, this creates wrappers that return a Promise around the orginal calls

	const loadApi = async () => {
		const data: ApiData = await someApiLoad();
		return await processApiResult(data, 1000);
	};
	const loadApi2 = async () => {
		const data: ApiData = await someApiLoad2();
		return await processApiResult(data, 2000);
	};
	const loadApi3 = async () => {
		const data: ApiData = await someApiLoad3();
		return await processApiResult(data, 0);
	};

	return {
		test: true,
		apiresult: loadApi(), // promise
		apiresult2: loadApi2(), // promise
		apiresult3: loadApi3() // promise
	};
};
```

The code snippet above shows multiple api requests being made, plus some data processing if necessary. The difference with the previous method is that each request is wrapped in a function that returns a Promise.

```
Req 1 -> Done
Req 2 ---> Done
Req 3 -------> Done
               Page loads
```

All requests are made at the same time, and the page will load as soon as everything is done. The bottleneck is now the slowest request.

## Demo

View the [demo](sveltekit-loading-speed.williamtang.me) to see this in action.
