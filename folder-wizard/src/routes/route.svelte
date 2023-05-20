<script>

import {Router,Route} from 'svelte-routing';
import Login from '../components/login.svelte';
import Signup from '../components/signup.svelte';

</script>

<Router>
    <Route path="/" component={Login}/>
    <Route path="/signup" component={Signup}/> 
</Router>