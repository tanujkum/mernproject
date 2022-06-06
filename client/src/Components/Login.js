import React,{useState,useContext} from 'react'
import { Form, Button,  Container, Row, Col } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../App';

const Login = () => {
  const navigate=useNavigate();
  const {state,dispatch}=useContext(myContext)
  const [formdata,setformdata]=useState({email:'',password:''})
  const {email,password} = formdata;
  const change=(e)=>{        
    setformdata({...formdata,[e.target.name]:e.target.value})
  } 
  const submit=async(e)=>{
    e.preventDefault(); 
    const res=await fetch('/login',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,password
        })
    });
    const data = res.json();
    if(res.status===400 || !res){
      window.alert("invalid Credentials")
      console.log("invalid Credentials")
    }else{
      dispatch({type:"USER",payload:true})
      window.alert("Login Successfull")
      console.log("Login Successfull")
      navigate('/')
    }
  }
  return (
    <div className='register_main'>
      <div className='register_main3'>
          <div className='between_div'>
          <Form onSubmit={submit} method="POST" >   
              <div className='register_main4'>
              <TextField variant="outlined" placeholder='Email' value={email} name="email" onChange={change}/>
              </div>
              <div className='register_main4'>
              <TextField variant="outlined" placeholder='PASSWORD' value={password} name="password" onChange={change}/>
              </div>
              <div className='register_main5'>
              <Button type="submit" className='reg_btn rounded-pill' id='btn_node'>SIGN IN</Button>
              </div>                                
          </Form>                           
          <div className='register_main5'>
              <Link to='/signup'>NOT REGISTERED?</Link>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Login