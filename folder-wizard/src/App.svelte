<script lang="ts">
  import Card from "./components/card.svelte";
  import Nav from "./components/nav.svelte";
  import { loggedInUser } from "./shared/stores/user.store";
  import { totalFolder, header } from "./shared/stores/folder.store";
  import Router from "./routes/index.svelte";
  import type { CARD } from "./shared/models/card.model";
  import { onMount } from "svelte";

  let hierachyCard: CARD = {
    header: "HIERACHY",
    text: "Watch oraganization of your files and folders..",
    link: "/",
    buttonText: "Watch",
    themes: "shadow",
  };

  let formCard: CARD = {
    header: "CREATE",
    text: "Click and create new files and folders",
    link: "https://benevolent-buttercream-2b54a5.netlify.app/",
    buttonText: "Create",
    themes: "shadow",
  };

  let countCard: CARD = {
    header: "Statistics",
    text: "Counting of Files & Folder: ",
    themes: "bg-success bg-gradient text-white shadow m-0",
  };

  let introCard: CARD = {
    title: "Folder & File Organizer",
    text: "You can create and watch files and folder...",
    list: ["For Watch:", "For Creating:"],
    themes: "bg-success bg-gradient text-white shadow",
  };
</script>

<main>
  <Nav />
  {#if $loggedInUser}
    <div class="container-fluid">
      <div class="row">
        <div class="col-7">
          <div class="row">
            <div class="col-12 mt-2">
              <div class="bg-secondary bg-gradient rounded-1 text-center">
                <h4 class="text-white m-0">{$header}</h4>
              </div>
            </div>
            <div class="col-12">
              <Router />
            </div>
          </div>
        </div>

        <div class="col-5">
          <div class="row my-2">
            <div class="col-12"><Card card={introCard} /></div>
          </div>
          <div class="row mb-4 mt-1">
            <div class="col"><Card card={hierachyCard} /></div>
            <div class="col"><Card card={formCard} /></div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="col">
                <div class="card {countCard.themes}">
                  <h5 class="card-header">{countCard.header}</h5>
                  <div class="card-body">
                    <p class="card-text">{countCard.text}{$totalFolder}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {:else}
    <Router />
  {/if}
</main>
