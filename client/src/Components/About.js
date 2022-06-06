import React,{useContext, useEffect,useState} from 'react'
import { Form, Button,  Container, Row, Col } from 'react-bootstrap'
import { useNavigate} from 'react-router-dom';
import { myContext } from '../App';
const About = () => {
  const navigate=useNavigate();
  const {state,dispatch}=useContext(myContext)
  const [userData,setUserData]=useState({});
  const callAbout=async()=>{
    try {
      const res=await fetch('/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:'include'
      })
      const data =await res.json();
      console.log(data);
      setUserData(data);
      if(res.status!==200){
        const error=new Error(res.Error);
        throw error;
      }

    } catch (error) {
      console.log(error)
      navigate('/login')
    }
  }
  useEffect(() => {
    callAbout();
  }, [])
  

  return (
    <div>
      <Form method="GET" >   
          <div>
            <h2>{userData.name}</h2>
            <h3>{userData.email}</h3>
            <h4>{userData.phone}</h4>
          </div>                          
      </Form>  
    </div>
  )
}

export default About