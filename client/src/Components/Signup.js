import React,{useContext, useState} from 'react'
import { Form, Button,  Container, Row, Col } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import { Link , useNavigate} from 'react-router-dom';
import { myContext } from '../App';

const Signup = () => {
    const navigate=useNavigate();
    const {state,dispatch}=useContext(myContext)
    const [formdata,setformdata]=useState({name:'',email:'',phone:'',password:'',cpassword:''})
    const {name,email,phone,password,cpassword} = formdata;
    const change=(e)=>{        
        setformdata({...formdata,[e.target.name]:e.target.value})
    } 
    const submit=async(e)=>{
        e.preventDefault();      
        const res=await fetch('/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,password,cpassword
            })
        });
        const data=await res.json();
        if(res.status===422 || !res){
            window.alert("invalid registration")
            console.log("invalid registration")
        }else{
            window.alert("Registration Successfull")
            console.log("Registration Successfull")
            navigate('/login')
        }
    }
  return (
    <div className='register_main'>
        <div className='register_main3'>
            <div className='between_div'>
            <Form onSubmit={submit} method="POST" >                                
                <div className='register_main4'>
                <TextField variant="outlined" placeholder='NAME' value={name} name="name" onChange={change}/>
                </div>
                <div className='register_main4'>
                <TextField variant="outlined" placeholder='Email' value={email} name="email" onChange={change} />
                </div>
                <div className='register_main4'>
                <TextField variant="outlined" placeholder='Phone' value={phone} name="phone" onChange={change} />
                </div>
                <div className='register_main4'>
                <TextField variant="outlined" placeholder='Password' value={password} name="password" onChange={change} />
                </div>
                <div className='register_main4'>
                <TextField variant="outlined" placeholder='Confirm Password' value={cpassword} name="cpassword" onChange={change} />
                </div>
                <div className='register_main5'>
                <Button type="submit" className='reg_btn rounded-pill' id='btn_node'>SIGN UP</Button>
                </div><br/>
                <Link to='/login' style={{marginLeft:'165px'}}>Already Exists?</Link>
            </Form>
            </div>
        </div>
    </div>
  )
}

export default Signup