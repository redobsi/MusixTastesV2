import './profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'
import { useState } from 'react'


function Profile() {
  const {currentUser} = useState({email:'test@gmail.com', emailVerified:true,})

  return (
      <div className='center'>
        <div className='profile'>
          <h1>Profile</h1>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <span onClick={() => signOut(auth)}>Sign Out</span>
        </div>
      </div>
  )
}

export default Profile
