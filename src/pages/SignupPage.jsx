import React from 'react'
import { Button, EmailSignupForm, FormControl, FormList } from 'react-appwrite-auth-ui'
import { Link, useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const navigate = useNavigate()

  const onAuthError = (error) => {
    alert('user creation failed 💔')
  }

  const onAuthSuccess = (response) => {
    alert('user created successfully')
    navigate('/')
  }

  return (
    <div className='h-screen grid-center'>
      <EmailSignupForm 
        email={email}
        password={password}
        onAuthError={onAuthError}
        onAuthSuccess={onAuthSuccess}
      >
        <FormList>
          <FormControl 
            label='Email' 
            type='email'
            value={email}
            theme='dark'
            onChange={(e) => setEmail(e.target.value)}/>
          <FormControl 
            label='Password' 
            type="password"
            value={password}
            theme='dark'
            onChange={(e) => setPassword(e.target.value)}/>
        </FormList>
        <Link className='u-margin-block-start-8 link' to='/sign-in'>Already have an account ? Signin instead .</Link>
        <Button type='submit' className='u-margin-block-start-16' > Sign up </Button>
      </EmailSignupForm>
    </div>
  )
}

export default SignupPage