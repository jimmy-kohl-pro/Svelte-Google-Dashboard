<script lang="ts">
    import Card, {
      Content,
      PrimaryAction,
      Media,
      MediaContent,
      Actions,
      ActionButtons,
      ActionIcons,
    } from '@smui/card';
    import Button, { Label } from '@smui/button';
    import IconButton, { Icon } from '@smui/icon-button';

    export let info: any;
  </script>

<Card>
    <PrimaryAction on:click={() => console.log('primary action click')}>
      <Media class="card-media-16x9" style="background-image: url({info.thumbnail});" aspectRatio="16x9" />
      <Content class="mdc-typography--body2">
        <h3 class="mdc-typography--headline6" style="margin: 0;">
          {info.title}
        </h3>
        <h4
          class="mdc-typography--subtitle2"
          style="margin: 0 0 10px; color: #888;"
        >
          Publié par {info.author}
        </h4>
        {info.description}
      </Content>
    </PrimaryAction>
    <Actions>
      <ActionButtons>
        <Button on:click={() => console.log('action click')}>
          <Label>Action</Label>
        </Button>
        <Button on:click={() => console.log('another action click')}>
          <Label>Another</Label>
        </Button>
      </ActionButtons>
      <ActionIcons>
        <IconButton
          on:click={() => console.log('action icon1 click')}
          toggle
          aria-label="Add to favorites"
          title="Add to favorites"
        >
          <Icon class="material-icons" on>favorite</Icon>
          <Icon class="material-icons">favorite_border</Icon>
        </IconButton>
        <IconButton
          class="material-icons"
          on:click={() => console.log('action icon2 click')}
          title="Share">share</IconButton
        >
        <IconButton
          class="material-icons"
          on:click={() => console.log('action icon3 click')}
          title="More options">more_vert</IconButton
        >
      </ActionIcons>
    </Actions>
  </Card>


<style>
    * :global(.card-media-16x9) {
      background-image: url({info.thumbnail});
    }
  </style>
