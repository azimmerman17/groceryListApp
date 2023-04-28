import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { CurrentUser } from "../Contexts/currentUser"


const LoginForm = () => {
  const navigate = useNavigate()
  const { setCurrentUser, currentUser } = useContext(CurrentUser)

  const [credentials, setCredentials] = useState({
      email: '',
      password: ''
  })
  const [errorMessage, setErrorMessage] = useState(null)

  async function handleSubmit(e) {
      e.preventDefault()
      const response = await fetch('http://localhost:8080/auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      })

      const data = await response.json()
      if (response.status === 200) {
        setCurrentUser(data.user)
        localStorage.setItem('token', data.token)
      } else {
        setErrorMessage(data.message)
      }
  }

  return (
    <main className="width-50 p-2">
      {currentUser 
        ? (
          <h4>Welcome {currentUser.first_name} {currentUser.last_name}</h4>
        )
      : <div>
        <h2>Login</h2>
        {errorMessage !== null
          ? (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )
          : null
        }
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-sm-12">
              <label htmlFor="email">Email</label>
              <input 
                className="form-control" 
                id="email" 
                name="email" 
                type="email"
                placeholder="Enter your email"
                required
                value={credentials.email}
                onChange={e => setCredentials({ ...credentials, email: e.target.value })} 
              />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                value={credentials.password}
                onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your Password"
              />
            </div>
          </div>
          <br />
          <input className="btn btn-primary btn-lg" type="submit" value="Sign in" />
        </form>
      </div>
      }
    </main>

  )
}

export default LoginForm