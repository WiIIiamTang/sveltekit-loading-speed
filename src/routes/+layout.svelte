<script lang="ts">
	import { navigating, page } from '$app/stores';

	let time_start: number;

	function start_time() {
		time_start = Date.now();
	}

	$: if ($navigating) {
		start_time();
	}
</script>

<div>
	<h1>SvelteKit server loading demo</h1>
	<p>
		Showcases how you can improve load times from server files in SvelteKit. This specific case is
		for when you might have multiple asynchronous functions to run in the load function. Preload is
		disabled on this site so you can hover over links safely.
	</p>
	<a href="/">Reset</a>
	<a href="/fast">Fast</a>
	<a href="/slow">Slow</a>
</div>

{#if $navigating}
	<h1>loading page... (navigating to {$navigating.to?.url.pathname})</h1>
{:else}
	{#if $page.url.pathname !== '/'}
		<div>
			<h3>{time_start ? `time waited until page render: ${Date.now() - time_start}ms` : ''}</h3>
		</div>
	{/if}
	<slot />
{/if}
