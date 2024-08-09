export default function Login() {

    return (
        <>
            <div className="container mt-5">
                <h1>Trang Login</h1>
                <form>
                    <div class="mb-3">
                        <label for="email" class="form-label">Emai</label>
                        <input type="email" class="form-control" id="email" />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" />
                    </div>
                    {/* <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" class="btn btn-dark">Login</button>
                </form>
            </div>
        </>
    )
}