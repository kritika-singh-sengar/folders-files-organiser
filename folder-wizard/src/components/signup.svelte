<script lang="ts">
  import { navigate } from "svelte-routing";
  import { API_URL } from "../shared/constants/api-url.constant";
  import type { USER } from "../shared/models/user.model";
    
  let user: USER ={
    name: "",
    email: "",
    password: ""
  };
  
  function onSubmit(){
    fetch(API_URL.userApi,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    })
    .then(result => console.log(result));
  }

</script>
<div class="d-flex flex-row justify-content-center mt-3">
    <div class="container bg-light border border-2 border-success rounded-3 p-5 m-3">
        <form on:submit|preventDefault={onSubmit}>
            <div class="mb-3">
                <label for="name" class="form-label">Name <span class="color-red">*</span></label>
                <input type="text" name="name" id="name" class="form-control" maxlength="20" bind:value={user.name} required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email <span class="color-red">*</span></label>
                <input type="email" class="form-control" name="email" id="email" bind:value={user.email} required>
            </div>
            <div class="mb-4">
                <label for="password" class="form-label">Password <span class="color-red">*</span></label>
                <input type="password" class="form-control" name="password" id="password" minlength="8" bind:value={user.password} required>
            </div>
            <div class="bg-white p-2">
                <button type="reset" class=" btn btn-danger">Reset</button>
                <button type="submit" class=" btn btn-success">Submit</button>
            </div>
        </form>

        <div class="d-flex justify-content-center mt-2">
            <div class="row">
                <div class="col">
                    <i>OR</i>
                </div>
                <div class="col">
                <button class="btn btn-primary" on:click={()=>navigate('/')} >Login</button>
            </div>
        </div>
            
        </div>
    </div>
</div>

<style>
    .color-red{
        color: red;
    }

    .container{
        width: 600px;
    }
</style>