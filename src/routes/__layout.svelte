<script lang="ts">
	import Button from '@smui/button';
	import TopAppBar, {
		Row,
		Section,
		Title,
		AutoAdjust,
		TopAppBarComponentDev
	} from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import { Label, Icon } from '@smui/common';
	import { Svg } from '@smui/common/elements';
	import { mdiGithub, mdiWeb } from '@mdi/js';
	import GoogleAuthButton from '../components/buttons/GoogleAuthButton.svelte';
	import { gToken } from '../store/user';
	import { goto } from '$app/navigation';

	let token = "";

	gToken.subscribe(value => {
		token = value;
	});

	let topAppBar: TopAppBarComponentDev;

	let lightTheme =
		typeof window === 'undefined' || window.matchMedia('(prefers-color-scheme: light)').matches;
	function switchTheme() {
		lightTheme = !lightTheme;
		let themeLink = document.head.querySelector<HTMLLinkElement>('#theme');
		if (!themeLink) {
			themeLink = document.createElement('link');
			themeLink.rel = 'stylesheet';
			themeLink.id = 'theme';
		}
		themeLink.href = `/smui${lightTheme ? '' : '-dark'}.css`;
		document.head
			.querySelector<HTMLLinkElement>('link[href="/smui-dark.css"]')
			?.insertAdjacentElement('afterend', themeLink);
	}
</script>

<TopAppBar bind:this={topAppBar} variant="standard">
	<Row>
		<Section>
			<Button on:click={() => goto('/')}><Title>Home</Title></Button>
			<Button on:click={() => goto('/youtube')}>Youtube</Button>
		</Section>
		<Section align="end" toolbar>
			{#if token}
				<Button on:click={() => gToken.set('')}>
					<Label>Log out</Label>
				</Button>
			{:else}
				<GoogleAuthButton bind:token={$gToken}/>
			{/if}
			<IconButton aria-label="GitHub" href="https://github.com/jimmy-kohl-pro/Svelte-Google-Dashboard">
				<Icon component={Svg} viewBox="0 0 24 24">
					<path fill="currentColor" d={mdiGithub} />
				</Icon>
			</IconButton>
			<Button on:click={switchTheme}>
				<Label>{lightTheme ? 'Lights off' : 'Lights on'}</Label>
			</Button>
		</Section>
	</Row>
</TopAppBar>

<AutoAdjust {topAppBar} style="display: flex; justify-content: space-between;">
	<div class="app-container"><slot /></div>
</AutoAdjust>

<style>
	.app-container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>