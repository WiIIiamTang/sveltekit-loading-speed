<script lang="ts">
	import type { Data } from '../../types/data.type';

	export let data: Data;

	$: results = [data.apiresult, data.apiresult2, data.apiresult3];
</script>

<h3>Fast load by putting promises in the return object (bottlenecked by slowest api):</h3>
<div>
	{#if data}
		{#each results as result, i}
			<div>
				<p>
					api request {i + 1} ({i + 1}s load) started loading at:
					<span>{result?.started_loading}</span>
				</p>
			</div>
		{/each}
	{/if}
</div>
