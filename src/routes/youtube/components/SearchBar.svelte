
<script lang="ts">
    import { Input } from '@smui/textfield';
    import Paper from '@smui/paper';
    import Fab from '@smui/fab';
    import { Icon } from '@smui/common';
    import { searchVideos } from '../../../api/YoutubeAPI';

    export let isLoading = false;
    export let searchResults: any[] = [];

    let value = '';

    async function doSearch() {
        searchResults = [];
        if (value === '') return;
        isLoading = true;
        const items: [] = await searchVideos(value);
        console.log(items);
        items.forEach((item: any) => {
            searchResults.push({
                title: item?.snippet?.title,
                author: item?.snippet?.channelTitle,
                description: item?.snippet?.description,
                thumbnail: item?.snippet?.thumbnails?.high?.url,
                videoId: item?.id?.videoId,

            });
        });
        isLoading = false;
    }

    function handleKeyDown(event: CustomEvent | KeyboardEvent) {
    event = event as KeyboardEvent;
    if (event.key === 'Enter') {
        doSearch();
    }
    }
</script>

<div class="solo-search-container solo-container">
    <Paper class="solo-paper" elevation={6}>
    <Icon class="material-icons">search</Icon>
    <Input
        bind:value
        on:keydown={handleKeyDown}
        placeholder="Search"
        class="solo-input"
    />
    </Paper>
    <Fab
    on:click={doSearch}
    disabled={value === ''}
    color="primary"
    mini
    class="solo-fab"
    >
    <Icon class="material-icons">arrow_forward</Icon>
    </Fab>
</div>

<style>
    .solo-search-container {
        padding: 36px 18px;
        width: 100%;
    }

    .solo-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    * :global(.solo-paper) {
        display: flex;
        align-items: center;
        flex-grow: 1;
        max-width: 600px;
        margin: 0 12px;
        padding: 0 12px;
        height: 48px;
    }
    * :global(.solo-paper > *) {
        display: inline-block;
        margin: 0 12px;
    }
    * :global(.solo-input) {
        flex-grow: 1;
        color: var(--mdc-theme-on-surface, #000);
    }
    * :global(.solo-input::placeholder) {
        color: var(--mdc-theme-on-surface, #000);
        opacity: 0.6;
    }
    * :global(.solo-fab) {
        flex-shrink: 0;
    }
</style>