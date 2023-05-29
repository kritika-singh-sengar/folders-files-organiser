<script>
  import { Router, Route } from "svelte-routing";
  import Login from "../components/login.svelte";
  import Signup from "../components/signup.svelte";
  import Hierachy from "../components/hierachy.svelte";
  import { loggedInUser } from "../shared/stores/user.store";
  import PageNotFound from "../components/pageNotFound.svelte";
  import AccessDenied from "../components/accessDenied.svelte";

  $: isAuthenticated = $loggedInUser;
</script>

<Router>
  {#if isAuthenticated}
    <Route path="/" component={Hierachy} />
    <!-- <Route path="/creator" component={}/>  -->
  {:else}
    <Route path="/signup" component={Signup} />
    <Route path="/" component={Login} />
  {/if}
  <Route path="/accessDenied" component={AccessDenied} />
  <Route component={PageNotFound} />
</Router>
