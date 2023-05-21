<div class="d-flex flex-row justify-content-center mt-3">
    <div class="container bg-light border border-2 border-success rounded-3 p-5 m-5">
        <form action="" method="post">
            <div class="mb-3">
                <label for="name" class="form-label">Name <span class="color-red">*</span></label>
                <input type="text" name="name" id="name" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email <span class="color-red">*</span></label>
                <input type="email" class="form-control" name="email" id="email" required>
            </div>
            <div class="mb-4">
                <label for="password" class="form-label">Password <span class="color-red">*</span></label>
                <input type="password" class="form-control" name="password" id="password" required>
            </div>
            <div class="bg-white p-2">
                <button type="reset" class=" btn btn-danger">Reset</button>
                <button type="submit" class=" btn btn-success">Submit</button>
            </div>
        </form>
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