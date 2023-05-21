<script>

import {Router,Route} from 'svelte-routing';
import Login from '../components/login.svelte';
import Signup from '../components/signup.svelte';
import FolderListing from '../components/folder-listing.svelte';

</script>

<Router>
    <Route path="/" component={FolderListing}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/> 
</Router>