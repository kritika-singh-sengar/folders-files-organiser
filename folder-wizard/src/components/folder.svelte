<script lang="ts">
  import type { FOLDER } from "../shared/models/folder.model";

  let folder: FOLDER = {
    name: "--",
    createdAt: "--",
  };
</script>

<div class="card bg-light rounded-0">
  <div class="card-body p-2 dropdown-toggle row align-items-center" id="folder" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="col-6">Name : {folder.name}</span>
        <span class="col-5">Created At : {folder.createdAt}</span>
  </div>
  <ul class="dropdown-menu w-100 p-0" aria-labelledby="folder">

    <!-- for file -->
    <li>
      <div class="card dropdown-item">
        <div class="card-body row p-1">
          <span class="col">Name : </span>
          <span class="col">Created At : </span>
        </div>
      </div>
    </li>

    <!-- for folder -->
    <li>
      <div class="dropdown dropdown-item">
        <div class="card-body p-1 dropdown-toggle row align-items-center" id="subFolder" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="col-6">Name : {folder.name}</span>
            <span class="col-5">Created At : {folder.createdAt}</span>
        </div>
        <ul class="dropdown-menu w-100 p-0" aria-labelledby="subFolder">
            <li>
                <div class="card dropdown-item">
                    <div class="card-body row p-1">
                      <span class="col">Name : </span>
                      <span class="col">Created At : </span>
                    </div>
                </div>
            </li>
        </ul>
      </div>
    </li>
  </ul>
</div>

<style>
    .dropdown:hover .dropdown-menu {
       display: block;
    }
</style>
