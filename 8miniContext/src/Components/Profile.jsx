import React,{useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {User} = useContext(UserContext)

  if ( !User) return <div> No user logged in </div>
  return <div> Welcome {User.username}</div>
}

export default Profile