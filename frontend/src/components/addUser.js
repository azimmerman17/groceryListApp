import { useState, useContext } from "react"
import Stack from 'react-bootstrap/Stack'
import { CurrentUser } from "../Contexts/currentUser"
import Button from "react-bootstrap/Button"


const AddUser = () => {
  const { setCurrentUser, currentUser } = useContext(CurrentUser)
	const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:8080/user/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
        'mode': 'no-cors',
			},
			body: JSON.stringify(user)
		})

    setCurrentUser(user)
	}

	return (
    <main>
      { currentUser 
        ? (
          <Stack gap={2}>
            <div>
              <h4>Welcome {currentUser.first_name} {currentUser.last_name}</h4>
              <Button href='http://localhost:3000/food/foodlist'>Add Food to Grocery List</Button> 
            </div>
            <img src='https://images.unsplash.com/photo-1617500603321-bcd6286973b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' width={550} height={700} className="rounded mx-auto d-block" alt='homeimage' />
            <div>
              Photo by <a href="https://unsplash.com/@ginnyrose?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ginny Rose Stewart</a> on <a href="https://unsplash.com/photos/_kUCAyYFVBI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <br />
          </Stack> 
        )
        : <Stack className='width-80 p-1' gap={1}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-6 form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                required
                value={user.first_name}
                onChange={e => setUser({ ...user, first_name: e.target.value })}
                className="form-control"
                id="firstName"
                name="firstName"
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                required
                value={user.last_name}
                onChange={e => setUser({ ...user, last_name: e.target.value })}
                className="form-control"
                id="lastName"
                name="lastName"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                value={user.email}
                onChange={e => setUser({ ...user, email: e.target.value })}
                className="form-control"
                id="email"
                name="email"
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}
                className="form-control"
                id="password"
                name="password"
              />
            </div>
          </div>
          <input className="btn btn-primary my-2" type="submit" value="Sign Up" />
        </form>
      </Stack> 
    }
    </main>
	)
}


export default AddUser
