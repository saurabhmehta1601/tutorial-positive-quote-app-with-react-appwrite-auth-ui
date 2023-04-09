import React from 'react'
import { Button, EmailSigninForm, FormControl, FormList } from 'react-appwrite-auth-ui'
import { Link } from 'react-router-dom'

const SigninPage = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const onAuthError = (error) => {
    console.log("error in signup" , error)
  }

  const onAuthSuccess = (response) => {
    console.log('success in email signup', response)
  }

  return (
    <div className='h-screen grid-center'>
      <EmailSigninForm 
        email={email}
        password={password}
        onAuthError={onAuthError}
        onAuthSuccess={onAuthSuccess}
      >
        <FormList>
          <FormControl 
            label='Email' 
            type='email'
            theme="dark"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <FormControl 
            label='Password' 
            type="password"
            theme="dark"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </FormList>
        <Link className='u-margin-block-start-8 link' to='/sign-up'>Don't have an account yet ? Signup instead .</Link>
        <Button type='submit' className='u-margin-block-start-16' > Sign in </Button>
      </EmailSigninForm>
    </div>
  )
}

export default SigninPage