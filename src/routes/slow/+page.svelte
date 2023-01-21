<script lang="ts">
	import type { Data } from '../../types/data.type';

	export let data: Data;

	$: results = [data.apiresult, data.apiresult2, data.apiresult3];
</script>

<div class="w-full flex flex-col justify-center items-center">
	<h3 class="text-lg font-semibold">
		Slow load where requests only start after the previous has finished ("waterfall"):
	</h3>
	<div class="flex flex-col justify-center items-center gap-4">
		{#if data}
			{#each results as result, i}
				<div class="bg-slate-300 px-4 my-4 py-2 rounded-md shadow-md">
					<h4 class="border-b border-zinc-800 py-2">
						<span class="text-lg">api request {i + 1}:</span>
						<span class="font-bold text-lg">
							{i + 1}s load + {(result?.processedData?.time || 0) / 1000}s data processing [expected
							total {i + 1 + (result?.processedData?.time || 0) / 1000}s]
						</span>
					</h4>
					<div class="text-sm text-slate-600">
						<div>
							<p>
								api request started loading at:
								<span>{result?.apiData.started_loading}</span> and finished at:
								<span>{result?.apiData.done_loading}</span>
							</p>
						</div>
						<div>
							<p>
								data started processing at: {result?.processedData?.started_processing} and finished
								at:
								{result?.processedData?.done_processing}
							</p>
						</div>
					</div>
					<div class="my-2 text-lg text-red-500 flex flex-col justify-start">
						<p>
							Start time: {result?.apiData.started_loading}
						</p>
						<p>
							Final time to finish: {result?.processedData?.done_processing}
						</p>
					</div>
				</div>
			{/each}

			<div class="opacity-25 hover:opacity-100 w-1/2">
				{#each results as result, i}
					{#if result?.processedData?.response}
						<div class="bg-zinc-400 my-4 py-2 rounded-md shadow-md w-full px-4">
							<h4 class="border-b border-zinc-800 py-2">
								<span class="text-lg">api request {i + 1} data:</span>
							</h4>
							<div>
								<p>
									<span class="font-bold">data:</span>
									<span>{result?.processedData?.response}</span>
								</p>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>
