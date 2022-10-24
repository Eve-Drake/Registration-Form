import {useRef, useState} from 'react'
import { BiInfoCircle, BiCheck, BiX } from "react-icons/bi";

const REGEX_USERNAME = /^^[a-zA-Z0-9\-]+$/
const REGEX_PASSWORD = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

const Register = () => {
    const userRef = useRef();
    const [username, setUsername] = useState<string>('')
    const [validUserame, setValidUsername] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('')
    const [validPassword, setValidPassword] = useState<boolean>(false)
    const [secondPassword, setSecondPassword] = useState<string>('')
    const [match, setMatch] = useState<boolean>(false)


    const checkUsername = (name : string) =>{
        setUsername(name)
        if(REGEX_USERNAME.test(username) && username != ''){
            setValidUsername(true)
        }
        else{
            setValidPassword(false)
        }
    }

  return (
    <div>
       <input 
       placeholder='Enter your Username'
       value={username}
       onChange={(e)=>checkUsername(e.target.value)}
       />

       <input 
        placeholder='Enter your Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
       />
       <input 
        placeholder='Repeat your Password'
        value={secondPassword}
        onChange={(e)=>setSecondPassword(e.target.value)}
       />
    </div>
  )
}

export default Register