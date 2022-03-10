<svelte:head>
  <script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<script lang="ts">
    import { onMount } from "svelte";
    import { getProfile } from '../../api/GoogleAPI';
    export let token: string;

    $: handleCredentialResponse = async (response: any) => {
        // const profile = await getProfile(response.credential); <== get profile name (not working)
        // console.log('profile :', profile);
        token = response.credential;
    }
    onMount(() => {
        google.accounts.id.initialize({
            client_id: "569352971025-mh47qg14ab6j7emci94725shpnf9k7iu.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("gsi-button"),
            { theme: "outline", size: "large" }  // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
    });
</script>
<div id="gsi-button"
     data-context="use"
     data-nonce=""
     data-auto_select="true"
     width="50px">
</div>