import {useEffect, useRef, useState} from 'react'
import { BiInfoCircle, BiCheck, BiX } from "react-icons/bi";


const REGEX_USERNAME = /^[a-zA-Z0-9_-]{3,16}$/
const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

const Register = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const errorRef = useRef();

    const [username, setUsername] = useState<string>('')
    const [validUserame, setValidUsername] = useState<boolean>(false);
    const [userFocus, setUserFocut] = useState<boolean>(false)

    const [password, setPassword] = useState<string>('')
    const [secondPassword, setSecondPassword] = useState<string>('')
    const [matchching, setMatching] = useState<boolean>(false)
    const [validPassword, setValidPassword] = useState<boolean>(false)
    const [passwordFocus, setPasswordFocus] = useState<boolean>(false)

    const [error, setError] = useState<boolean>(false)

    useEffect(()=>{
      if (usernameRef.current){
        usernameRef.current.focus()
      }
    },[])

    useEffect(()=>{
      if(REGEX_USERNAME.test(username)){
        setValidUsername(true)
      }
      else{
        setValidUsername(false)
      }
    },[username])

    useEffect(()=>{
      if(REGEX_PASSWORD.test(password)){
        setValidPassword(true)
      }
      else{
        setValidPassword(false)
      }
      if(password === secondPassword){
        setMatching(true)
      }
    },[password])

  return (
    <div>
       <input 
       placeholder='Enter your Username'
       value={username}
       onChange={(e)=>setUsername(e.target.value)}
       />

       <input 
        placeholder='Enter your Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
       />

      <input 
        placeholder='Enter your Password'
        value={secondPassword}
        onChange={(e)=>setSecondPassword(e.target.value)}
       />
  
       <button>Register</button>
    </div>
  )
  }

export default Register