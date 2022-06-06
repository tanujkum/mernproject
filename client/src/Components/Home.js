import React,{useState,useEffect, useContext} from 'react'
import { myContext } from '../App';

const Home = () => {
  const [name,setName]=useState('');
  const {state,dispatch}=useContext(myContext)
  const [hide,setHide]=useState(false)
  const callAbout=async()=>{
    try {
      const res=await fetch('/contact',{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      })
      const data =await res.json();
      console.log(data.name);
      setName(data.name);
      setHide(true)
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
  return (
    <div className='homepage'>
      <h3 style={{color:'springgreen',marginTop:'20px'}}>Welcome</h3>
      <h1 style={{color:'black',marginTop:'10px'}}>{name?`Hello, ${name}`:""}</h1>
      <h2 style={{color:'black',marginTop:'50px'}}>{hide ? "Happy to see you": "We Are The Mern Developer"}</h2>
    </div>
  )
}

export default Home