<script lang="ts">
  import type { FILE } from "../shared/models/file.model";

  let file: FILE = {
    name: "--",
    createdAt: "--",
  };
</script>

<div class="card bg-light rounded-0">
  <div class="card-body row p-2">
    <span class="col">Name : {file.name}</span>
    <span class="col">Created At : {file.name}</span>
  </div>
</div>
