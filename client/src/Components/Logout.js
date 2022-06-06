import React, { useEffect ,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../App';

const Logout = () => {
    const {state,dispatch}=useContext(myContext)
    const navigate=useNavigate();
    const logout=async()=>{
        try {
            const res=await fetch('/logout',{
                method:"GET",
                headers:{
                "Content-Type":"application/json"
                },
                credentials:"include"
            })
            
            dispatch({type:"USER",payload:false})
            navigate('/login')
            if(res.status!=200){
                const error=new Error(res.error)
                throw error;
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
      logout()
    }, [])
    
  return (
    <div>Logout</div>
  )
}

export default Logout