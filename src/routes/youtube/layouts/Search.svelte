<script lang="ts">
	import SearchBar from "../components/SearchBar.svelte";
    import { Text } from '@smui/list';
    import CircularProgress from '@smui/circular-progress';
    import VideoCard from '../components/VideoCard.svelte';

	let isLoading = false;
	let searchResults: any[] = [];

</script>


<SearchBar bind:isLoading={isLoading} bind:searchResults={searchResults} />

{#if isLoading}
    <CircularProgress />
{:else if searchResults.length > 0}
    {#each searchResults as result}
        <VideoCard info={result} />
    {/each}
{/if}