import React from 'react'
import {renderRoutes} from 'react-router-config';

export default function Register(props){
  const {route} = props
  return(
    <div>
      <p>Register</p>
      <p>Register</p>
      <p>Register</p>
      <p>Register</p>
      <p>Register</p>
      <p>Register</p>
      <p>Register</p>
      {renderRoutes(route.routes)}
    </div>
  )
}