<script lang="ts">
  import { loggedInUser } from "../shared/stores/user.store";
  import { navigate } from "svelte-routing";
  function logout() {
    loggedInUser.set('');
    navigate('/login');
  }

  const signUp = ()=>{
    navigate("/signup");
  }

</script>
<nav class="navbar navbar-light bg-success bg-gradient text-white">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">Folder Wizard</a>
    {#if $loggedInUser}
    <span>
      <span class="p-1 fw-bold ">{$loggedInUser}</span>
      <button type="button" class="btn btn-light" on:click={logout}>Logout</button>
    </span>
    {:else}
    <button type="button" class="btn btn-light" on:click={signUp}>Sign up</button>
    {/if}
  </div>
</nav>