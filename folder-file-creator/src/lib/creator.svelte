<svelte:options tag="folder-file-creator" />

<script lang="ts">
  import { onMount } from "svelte";
  import type { FOLDER } from "../model/folder.model";
  import { API_URL } from "../constants/api-url.constant";
  import {
    CATEGORY,
    LEVEL,
    MESSAGE_NAME_EXIST,
    MESSAGE_NO_FOLDER,
    NO_DATA,
  } from "../constants/folder.constant";

  let data: FOLDER = {
    name: "",
    category: "",
    level: "",
    parent: "",
    rootFolder: "",
    createdAt: "",
  };

  let selectedFolder: FOLDER = {
    name: "",
    category: "",
    level: "",
    parent: "",
    rootFolder: "",
    createdAt: "",
  };

  let allList: FOLDER[] = [];
  let foldersList: FOLDER[] = [];
  let rootFolderList: FOLDER[] = [];
  let childFolderList: FOLDER[] = [];
  let subChildFolderList: FOLDER[] = [];

  onMount(async () => {
    allList = await fetch(API_URL.URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());

    foldersList = await fetch(API_URL.URL_For_LIST_OF_FOLDERS, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());

    rootFolderList = await fetch(API_URL.URL_For_LIST_OF_ROOT_FOLDERS, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());

    childFolderList = await fetch(API_URL.URL_For_LIST_OF_CHILD_FOLDERS, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());

    subChildFolderList = await fetch(
      API_URL.URL_For_LIST_OF_SUB_CHILD_FOLDERS,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) => response.json());
  });

  const onSubmit = async () => {
    allList.forEach((folder) => {
      if (folder.name == data.name) {
        alert(MESSAGE_NAME_EXIST);
        location.reload();
        return;
      }
    });

    if (data.category == CATEGORY.FILE) {
      if (data.level == LEVEL.ROOT) {
        data.parent = NO_DATA;
        data.rootFolder = NO_DATA;
      } else if (data.level == LEVEL.CHILD) {
        data.parent = selectedFolder.name;
        data.rootFolder = selectedFolder.name;
      } else {
        data.parent = selectedFolder.name;
        data.rootFolder = selectedFolder.parent;
      }
    } else {
      if (data.level == LEVEL.ROOT) {
        data.parent = NO_DATA;
        data.rootFolder = NO_DATA;
      } else {
        data.parent = selectedFolder.name;
        data.rootFolder = selectedFolder.name;
      }
    }
    data.createdAt = new Date().toJSON().split("T")[0];
    console.log(data);

    await fetch(API_URL.URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    location.reload();
  };
</script>

<div class="row center">
  <div class="container">
    <form on:submit|preventDefault={onSubmit}>
      <div class="row">
        <div class="col-30">
          <label for="folder" class="form-label">
            Name<span class="color-red">*</span>
          </label>
        </div>
        <div class="col-70">
          <input
            type="text"
            bind:value={data.name}
            name="folder"
            id="folder"
            class=""
            required
          />
        </div>
      </div>

      <div class="row">
        <div class="col-30">
          <label for="type" class="form-label"
            >Type <span class="color-red">*</span></label
          >
        </div>
        <div class="col-70">
          <select name="type" id="type" bind:value={data.category}>
            <option value="file">File</option>
            <option value="folder">Folder</option>
          </select>
        </div>
      </div>

      {#if data.category == CATEGORY.FILE && data.name}
        <div class="row">
          <div class="col-30">
            <label for="level" class="form-label"
              >Level <span class="color-red">*</span></label
            >
          </div>
          <div class="col-70">
            <select bind:value={data.level} name="level" id="level" required>
              <option value={LEVEL.ROOT}>Root</option>
              <option value={LEVEL.CHILD}>Child</option>
              <option value={LEVEL.GRAND_CHILD}>Grand-Child</option>
            </select>
          </div>
        </div>

        {#if data.level && data.level == LEVEL.CHILD}
          {#if rootFolderList.length > 0}
            <div class="row">
              <div class="col-30">
                <label for="parentFolder" class="form-label"
                  >List Of Folder <span class="color-red">*</span></label
                >
              </div>
              <div class="col-70">
                <select
                  name="parentFolder"
                  id="parentFolder"
                  bind:value={selectedFolder}
                  required
                >
                  {#each rootFolderList as folder}
                    <option value={folder}>{folder.name}</option>
                  {/each}
                </select>
              </div>
            </div>
          {:else}
            <div class="row color-red">
              <div class="col-30" />
              <div class="col-70">* {MESSAGE_NO_FOLDER}</div>
            </div>
          {/if}
        {/if}
        {#if data.level && data.level == LEVEL.GRAND_CHILD}
          {#if foldersList.length > 0}
            <div class="row">
              <div class="col-30">
                <label for="parentFolder" class="form-label"
                  >List Of Folder <span class="color-red">*</span></label
                >
              </div>
              <div class="col-70">
                <select
                  name="parentFolder"
                  id="parentFolder"
                  bind:value={selectedFolder}
                  required
                >
                  {#each childFolderList as folder}
                    <option value={folder}>{folder.name}</option>
                  {/each}
                </select>
              </div>
            </div>
          {:else}
            <div class="row color-red">
              <div class="col-30" />
              <div class="col-70">* {MESSAGE_NO_FOLDER}</div>
            </div>
          {/if}
        {/if}
      {/if}

      <!-- for folder -->
      {#if data.category == CATEGORY.FOLDER && data.name}
        <div class="row">
          <div class="col-30">
            <label for="level" class="form-label"
              >Level <span class="color-red">*</span></label
            >
          </div>
          <div class="col-70">
            <select bind:value={data.level} name="level" id="level" required>
              <option value={LEVEL.ROOT}>Root</option>
              <option value={LEVEL.CHILD}>Child</option>
            </select>
          </div>
        </div>

        {#if data.level == LEVEL.CHILD && data.level}
          {#if rootFolderList.length > 0}
            <div class="row">
              <div class="col-30">
                <label for="rootFolder" class="form-label"
                  >Root Folder <span class="color-red">*</span></label
                >
              </div>
              <div class="col-70">
                <select
                  name="rootFolder"
                  id="rootFolder"
                  bind:value={selectedFolder}
                  required
                >
                  {#each rootFolderList as folder}
                    <option value={folder}>{folder.name}</option>
                  {/each}
                </select>
              </div>
            </div>
          {:else}
            <div class="row color-red">
              <div class="col-30" />
              <div class="col-70">* {MESSAGE_NO_FOLDER}</div>
            </div>
          {/if}
        {/if}
      {/if}
      
      <div class="row">
        <div class="col-50">
          <button type="reset" class="btn btn-reset">Reset</button>
        </div>
        <div class="col-50">
          <button type="submit" class="btn btn-submit">Submit</button>
        </div>
      </div>
    </form>
  </div>
</div>

<style>

  .color-red {
    color: red;
  }
  .container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 40px;
    width: 600px;
    margin: 30px;
    border-color: 1px solid #45a049;
    border-radius: 4px;
  }
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .center {
    justify-content: center;
  }
  .col-30 {
    flex: 30%;
  }
  .col-70 {
    flex: 70%;
  }
  .col-50 {
    flex: 50%;
  }
  input[type="text"],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .btn {
    max-width: 30%;
    min-width: 25%;
    color: white;
    padding: 10px 15px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn-submit {
    background-color: #45a049;
  }
  .btn-reset {
    background-color: red;
  }
  .btn-submit:hover,
  .btn-reset:hover {
    opacity: 0.8;
  }

  label {
    color: black;
    font-weight: bold;
    padding: 12px 12px 12px 0;
    display: inline-block;
  }
</style>
