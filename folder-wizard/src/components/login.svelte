<script lang="ts">
  import { API_URL } from "../shared/constants/api-url.constant";
  import type { LOGIN } from "../shared/models/login.model";
  import type { USER } from "../shared/models/user.model";
  import { loggedInUser } from "../shared/stores/user.store";
  import { navigate } from "svelte-routing/src/history";

  let credentials: LOGIN = {
    email: "",
    password: "",
  };

  async function onSubmit() {
    const response = await fetch(
      API_URL.userApi + "?" + "email=" + credentials.email,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    let actualCredentials: USER[] = await response.json();
    //email not exits conditions
    if (
      credentials.email === actualCredentials[0].email &&
      credentials.password === actualCredentials[0].password
    ) {
      if (typeof Storage != undefined) {
        loggedInUser.update(()=>credentials.email);
        //toastr
        navigate('/');
      } else {
        console.log("storage not defined");
      }
    } else {
      console.log("login fail");
    }
  }

</script>

<div class="d-flex flex-row justify-content-center mt-5">
  <div
    class="container bg-light border border-2 border-success rounded-3 p-5 m-5"
  >
    <form on:submit|preventDefault={onSubmit}>
      <div class="mb-3">
        <label for="email" class="form-label"
          >Email <span class="color-red">*</span></label
        >
        <input
          type="email"
          bind:value={credentials.email}
          class="form-control"
          name="email"
          id="email"
          required
        />
      </div>
      <div class="mb-4">
        <label for="password" class="form-label"
          >Password <span class="color-red">*</span></label
        >
        <input
          type="password"
          bind:value={credentials.password}
          class="form-control"
          name="password"
          id="password"
          minlength="8"
          required
        />
      </div>
      <div class="">
        <button type="reset" class=" btn btn-danger">Reset</button>
        <button type="submit" class=" btn btn-success">Submit</button>
      </div>
    </form>
  </div>
</div>

<style>
  .color-red {
    color: red;
  }

  .container {
    width: 600px;
  }
</style>
