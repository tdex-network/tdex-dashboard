<script lang="ts">
	import Connect from './Connect.svelte';

	export let view: `connect` | `notready` | `ready` = `connect`;
</script>

<main>

	{#if view === `connect`}
	<Connect />
	{:else if view === `notready`}
		<p>TDEX must be initialized or unlocked</p>
	{:else}
		<p>Deposit funds</p>
	{/if}

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		display: flex;
        justify-content: center;
        align-items: center;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
