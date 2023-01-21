<script lang="ts">
	import { navigating, page } from '$app/stores';
	import '../app.css';

	let time_start: number;

	function start_time() {
		time_start = Date.now();
	}

	$: if ($navigating) {
		start_time();
	}
</script>

<div class="bg-slate-200 min-h-screen max-w-screen font-light">
	<div class="h-fit w-full flex justify-center mb-8">
		<div class="container flex justify-center items-center flex-col w-1/2">
			<h1 class="text-4xl font-bold leading-3 py-4 mb-8">SvelteKit server loading demo</h1>
			<p>
				The SvelteKit documentation has a part that mentions <a
					class="text-sky-800 underline font-semibold"
					href="https://kit.svelte.dev/docs/load#promise-unwrapping">Promise unwrapping.</a
				>
				Despite being such a small section, it can have large impacts on page load speeds. This demo
				showcases how you can improve load times from server files in SvelteKit. This specific case is
				for when you might have multiple asynchronous functions to run in the load function. Preload
				on hover is disabled on this site.
				<a
					href="https://github.com/WiIIiamTang/sveltekit-loading-speed"
					class="underline font-semibold text-sky-800"
				>
					See the Github for code examples.
				</a>
			</p>
		</div>
	</div>
	<div
		id="navButtons"
		class="flex w-1/2 mx-auto sticky top-0 flex-row flex-wrap justify-around items-center gap-4 my-4 rounded-md py-4"
	>
		<a href="/" class="bg-sky-300 rounded-md shadow-sm px-8 py-2">Reset</a>
		<a href="/fast" class="bg-sky-300 rounded-md shadow-sm px-8 py-2">Fast</a>
		<a href="/slow" class="bg-sky-300 rounded-md shadow-sm px-8 py-2">Slow</a>
	</div>

	{#if $navigating}
		<h1 class="text-xl font-light my-10 text-center w-full">
			loading page... (navigating to {$navigating.to?.url.pathname})
		</h1>
	{:else}
		{#if $page.url.pathname !== '/'}
			<div class="flex flex-col w-full justify-center items-center mb-4">
				<h3>Request started at: {new Date(time_start).toUTCString()}</h3>
				<h3>Page rendered at: {new Date(Date.now()).toUTCString()}</h3>
				<h3 class="bg-amber-300">
					{time_start ? `Time waited until page render: ${Date.now() - time_start}ms` : ''}
				</h3>
			</div>
		{/if}
		<slot />
	{/if}
</div>
