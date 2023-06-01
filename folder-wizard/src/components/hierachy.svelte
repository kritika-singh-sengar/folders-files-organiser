<script lang="ts">
  import { onMount } from "svelte";
  import { API_URL } from "../shared/constants/api-url.constant";
  import type { FOLDER } from "../shared/models/folder.model";
  import File from "./file.svelte";
  import Folder from "./folder.svelte";
  import {foldersInStore,totalFolder, header} from "../shared/stores/folder.store";
  import 'ag-grid-community/styles/ag-grid.css';
  import 'ag-grid-community/styles/ag-theme-alpine.css';
  import type { ColDef,ColGroupDef} from "ag-grid-community";
  import AgGridSvelte from "ag-grid-svelte";
  import { DEFAULT_COL_DEF, FOLDER_COL_DEFS } from "../shared/constants/ag-grid-col-def.constant";

  let columnDefs : (ColDef | ColGroupDef)[] = FOLDER_COL_DEFS;
  let defaultColDef : ColDef = DEFAULT_COL_DEF;
  let rowData : FOLDER[] = [];

  header.set("FOLDER & FILE STRUCTURE");

  onMount(async () => {
    rowData = await fetch(API_URL.gridDataApi, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(response=>response.json());
    foldersInStore.set(rowData);
    totalFolder.set(rowData.length);
  });

</script>

<div class="row">

  <div class="ag-theme-alpine" style:width="100%" style:height="500px">
    <AgGridSvelte {rowData} {columnDefs} {defaultColDef}/>
  </div>

  <!-- {#each foldersData as row}
    {#if row.category == "File"}
      <div class="col-12">
        <File />
      </div>
    {:else} 
      <div class="col-12">
        <Folder />
      </div>
    {/if}
  {/each} -->
</div>

<style>
  .ag-theme-alpine {
  --ag-header-height: 30px;
  --ag-header-column-separator-display: block;
  --ag-header-column-separator-height: 100%;
  --ag-header-column-separator-width: 1px;
  --ag-selected-row-background-color: white;
}
</style>
