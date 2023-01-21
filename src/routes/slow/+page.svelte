<script lang="ts">
	import type { Data } from '../../types/data.type';

	export let data: Data;

	$: results = [data.apiresult, data.apiresult2, data.apiresult3];
</script>

<h3>Slow load (waterfall):</h3>
<div>
	{#if data}
		{#each results as result, i}
			<div class={`result${i + 1}`}>
				<p>
					api request {i + 1} ({i + 1}s load) started loading at:
					<span>{result?.started_loading}</span>
				</p>
			</div>
		{/each}
	{/if}
</div>

<style>
	.result2 {
		margin-left: 2rem;
	}

	.result3 {
		margin-left: 4rem;
	}
</style>
