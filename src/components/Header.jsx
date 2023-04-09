import React from 'react'
import { SignoutButton, useAuthenticatedUser } from 'react-appwrite-auth-ui'
import { Link , useNavigate } from 'react-router-dom'

const Header = () => {
  const {loading,error,user} = useAuthenticatedUser()
  const navigate = useNavigate()

  const handleSignoutSuccess = () => {
    navigate('/sign-in')
  }

  return (
    <nav className='navbar__container'>
      <h3 className='navbar__logo'>Positive Quotes</h3>
      { (!loading && !error && user) ? 
      (<SignoutButton 
        onAuthError={(error) => {alert(error)}} 
        onAuthSuccess={ handleSignoutSuccess }
        >Sign out</SignoutButton>) :
      <Link className='navbar__link' to="/sign-in">Sign in</Link>}
    </nav>
  )
}

export default Header