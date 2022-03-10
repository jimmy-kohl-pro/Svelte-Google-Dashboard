<script lang="ts">
	import SearchBar from "../components/SearchBar.svelte";
    import { Text } from '@smui/list';
    import CircularProgress from '@smui/circular-progress';
    import VideoCard from '../components/VideoCard.svelte';
    import LayoutGrid, { Cell } from '@smui/layout-grid';

	let isLoading = false;
	let searchResults: any[] = [];

</script>

<div class='search-layout-container'>
    <SearchBar bind:isLoading={isLoading} bind:searchResults={searchResults} />

    {#if isLoading}
        <div style="display: flex; justify-content: center">
            <CircularProgress style="height: 32px; width: 32px;" indeterminate />
        </div>
    {:else if searchResults.length > 0}
        <div class="layout-result">
            {#each searchResults as result}
                <div class="cell-result">
                    <VideoCard info={result} />
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .search-layout-container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .layout-result {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
    
    .cell-result {
        max-width: 420px;
    }
</style>