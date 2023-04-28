import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './LoginForm';

const home = () => {
    return (
        <div className='bg-white p-2 shadow rounded'>
            <img src='https://images.unsplash.com/photo-1617500603321-bcd6286973b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' width={550} height={700} className="rounded mx-auto d-block" alt='homeimage' />
            <div>
            Photo by <a href="https://unsplash.com/@ginnyrose?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ginny Rose Stewart</a> on <a href="https://unsplash.com/photos/_kUCAyYFVBI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <br />

        <main>
            <h2>Sign in</h2>
            <form className='border bg-white m-1 p-2 shadow rounded' method="POST" action="http://localhost:3000/home">
                <div className="row">
                  <div className="form-group col-sm-6">
                    <label htmlFor="name">Email</label>
                    <input className="form-control" id="Enter Email" name="email" required />
                  </div>
                  <div className="form-group col-sm-6">
                    <label htmlFor="pic">Password</label>
                    <input className="form-control" id="Enter Password" name="password" required />
                  </div>
                </div>
                <br />
                <input className="btn btn-primary btn-lg" type="submit" value="Sign in" />
            </form>
        </main> 

            <LoginForm />

        </div>  
    )
}

export default home

