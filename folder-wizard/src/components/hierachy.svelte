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

  let response : FOLDER[];
  let columnDefs : (ColDef | ColGroupDef)[] = FOLDER_COL_DEFS;
  let defaultColDef : ColDef = DEFAULT_COL_DEF;
  let rowData : FOLDER[] = response || [];

  header.set("FOLDER & FILE STRUCTURE");
  
  //let data;
  //$: foldersData = response || [];

  onMount(async () => {
    response = await fetch(API_URL.gridDataApi, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(response=>response.json());//updated 
    //check if on new add this will load or not
    foldersInStore.set(response);
    totalFolder.set(response.length);
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
  --ag-grid-size: 3px;
  --ag-list-item-height: 30px;
  --ag-cell-horizontal-padding: 1rem;
  --ag-selected-row-background-color: white;
}
.ag-header-group-cell-label {
  justify-content: center;
}

</style>
