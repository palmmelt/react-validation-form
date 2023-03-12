import React from 'react'
import './FormComponent.css'
import {useState} from 'react'

const FormComponent = () => {
    // form-state
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [rePassword,setRePassword] = useState('')

    // validate-Form
    const validateForm = (e) => {
        e.preventDefault()

        // userName-Error
        if (userName.length>=8){
            setErrorUserName('You can use this username.')
            setUserNameColor('green')
        }else{
            setErrorUserName('You cannot use this username. Please enter a username of 8 characters or more.')
            setUserNameColor('red')
        }

        // Email-Error
        if(email.includes('@' && '.')){
            setErrorEmail('You can use this email.')
            setEmailColor('green')
        }else{
            setErrorEmail('Please enter a valid email format.')
            setEmailColor('red')
        }
        // Password-Error
        if(password.length>=8){
            setErrorPassword('You can use a password.')
            setPasswordColor('green')
        }else{
            setErrorPassword('Enter a password of more than 8 characters.')
            setPasswordColor('red')
        }
        // RePassword-Error
        if(rePassword != '' && rePassword === password){
            setErrorRePassword('Password match.')
            setRePasswordColor('green')
        }else{
            setErrorRePassword('Passwords do not match.')
            setRePasswordColor('red')
        }
    }

    // error-state
    const [errorUserName,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorRePassword,setErrorRePassword] = useState('')

    // error-state-color
    const [userNameColor,setUserNameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [rePasswordColor,setRePasswordColor] = useState('')

  return (
    <div className='container'>
        <h2>Register Form</h2>
        <form className='form' onSubmit={validateForm}>
            <div className='form-control'>
                <label>User ID</label>
                <input type='text' value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
                <small style={{color:userNameColor}}>{errorUserName}</small>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                <small style={{color:emailColor}}>{errorEmail}</small>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                <small style={{color:passwordColor}}>{errorPassword}</small>
            </div>
            <div className='form-control'>
                <label>Confirm Password</label>
                <input type='password' value={rePassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderColor:rePasswordColor}}/>
                <small style={{color:rePasswordColor}}>{errorRePassword}</small>
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default FormComponent