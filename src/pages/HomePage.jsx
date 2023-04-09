import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useAuthenticatedUser } from 'react-appwrite-auth-ui'
import { Navigate } from 'react-router-dom'
import Quotes from '../components/Quotes'

const HomePage = () => {
  const {user,loading,error} = useAuthenticatedUser()

  if(loading){
    return <div className='loading__page'>
      <div className="loading__section">
        <span className="loading__spinner"></span>
        <h3 className='loading__text'>Loading...</h3>
      </div>
    </div>
  }

  if(error){
    return <Navigate to='/sign-in' />
  }

  return (<div>
    <Header /> 
    {!user ? 
      <section className='unauthorized__section'>You must login to see quotes</section> :
      <Quotes />
    }
  </div>) 
}


export default HomePage