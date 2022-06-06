import React,{useState,useEffect, useContext} from 'react'
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import {Button} from 'react-bootstrap'
import { myContext } from '../App';

const Contact = () => {
  const [userData,setUserData]=useState({name:"",email:"",phone:"",message:""});
  const {state,dispatch}=useContext(myContext)
  const callAbout=async()=>{
    try {
      const res=await fetch('/contact',{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      })
      const data =await res.json();
      // console.log(data);
      setUserData({...userData,name:data.name,email:data.email,phone:data.phone});
      if(res.status!==200){
        const error=new Error(res.Error);
        throw error;
      }

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    callAbout();
  }, [])
  
  const changeData=(e)=>{
    console.log(e.target.value)
    setUserData({...userData,[e.target.name]:e.target.value})
  }
  const sendData=async(e)=>{
    e.preventDefault();
    const {name,email,phone,message}=userData;

    const res=await fetch("/contact1",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,message
      })
    })
    const data=await res.json();
    if(!data){
      console.log("message not found")
    }else{
      alert("Message Sent")
      setUserData({...userData,message:""})
    }
  }
  return (
    <div>
    <div className='maincontact'>
      <div className='child'><span>Phone</span></div>
      <div className='child'><span>Email</span></div>
      <div className='child'><span>Address</span></div>
    </div>
    <div className='maincontact1'><br/>
      <h1 style={{marginLeft:'100px',marginTop:'20px'}}>Get In Touch</h1>
      <form method="POST" className='middlediv'>
        <div className='middlediv1'>
          <div className='register_main4'>
            <TextField  placeholder='Your Name' name='name' value={userData.name} onChange={changeData}/>
          </div>
          <div className='register_main4'>
            <TextField  placeholder='Your Email' name='email' value={userData.email} onChange={changeData}/>
          </div>
          <div className='register_main4'>
            <TextField  placeholder='Your Address' name='phone' value={userData.phone} onChange={changeData}/>
          </div>
        </div>
        <div style={{marginTop:20,marginLeft:'15%'}}>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={5}
          placeholder="Message..."
          name='message' value={userData.message} onChange={changeData}
          style={{ width: '70%'}}
        />
        </div>
        <div style={{marginLeft:'15%',marginTop:10}}>
          <Button type="submit" id='btn_node' onClick={sendData}>SIGN UP</Button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Contact