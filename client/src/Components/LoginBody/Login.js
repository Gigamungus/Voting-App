import React from 'react'
import Input from '../Input/Input';


const Login = () => {
  return (
    <form action="api/login" method="POST">
      <Input placeholder="Username" />
    </form>
  )
}

export default Login