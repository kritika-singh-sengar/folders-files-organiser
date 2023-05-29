<script lang="ts">
  import { type CARD } from "../shared/models/card.model";

  export let card: CARD = {
    header: "--",
    title: "--",
    text: "--",
    list: [],
    link: "--",
    buttonText: "--",
    themes: "--",
  };
</script>

<div class="card {card.themes}">
  {#if card.header}
    <h5 class="card-header">{card.header}</h5>
  {/if}
  <div class="card-body">
    {#if card.title}
      <h5 class="card-title">{card.title}</h5>
    {/if}
    {#if card.text}
      <p class="card-text">{card.text}</p>
    {/if}
    {#if card.list}
      <ol>
        {#each card.list as item}
          <li>{item}</li>
        {/each}
      </ol>
    {/if}
    {#if card.link && card.buttonText}
      <a href={card.link} class="btn btn-success">{card.buttonText}</a>
    {/if}
  </div>
</div>
