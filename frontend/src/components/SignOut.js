import { useContext } from "react" 

import { CurrentUser } from "../Contexts/currentUser"
import Button from "react-bootstrap/Button"

const SignOut = () => {

  const { setCurrentUser, currentUser } =useContext(CurrentUser)

  const handleClick = () => {
    localStorage.removeItem('token')
    setCurrentUser(null)
  }

  return (
    <div>
      {currentUser ? (
        <span>
          <strong className='text-white mx-3'>{currentUser.first_name ? `Welcome ${currentUser.first_name}` : null}</strong>
          <Button onClick={handleClick}>Log off</Button> 
        </span>
      ): null}
    </div>
  )
}

export default SignOut