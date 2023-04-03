import React, { useState } from 'react';
import Login from './Login';

function Registration(){
  const [name , setName]=useState("");
  const [email , setEmail]=useState("");
  const [password, setPassword]=useState("");
  const[phone , setPhone]=useState();
  const[flag , setFlag]=useState(false);
  const[login , setLogin]=useState(true);
  function handleSubmit(e){
    e.preventDefault();
    if(!name|| !email|| !password|| !phone){
      setFlag(true);
    }else{
      setFlag(false);
      localStorage.setItem("Email",JSON.stringify(email));
      localStorage.setItem("password",JSON.stringify(password));
      console.log("save in local storage");
      setLogin(!login);
    }
  }
  function handleClick(){
    setLogin(!login);
  }
  return (
    <>
    <div> 
      {login?(
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className='form-group' >
                <label>Name</label>
                <input
                type='text'
                className='form-control'
                placeholder='Enter full Name'
                onChange={(event)=>setName(event.target.value)}
                />
            </div>          
            <div className='form-group'>
                <label>Email</label>
                <input
                type='email'
                className='form-control'
                placeholder='Enter email'
                onChange={(event)=>setEmail(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input
                type='password'
                className='form-control'
                placeholder='Enter Password'
                onChange={(event)=>setPassword(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Phone no.</label>
                <input
                type='phone'
                className='form-control'
                placeholder='Enter contact No'
                onChange={(event)=>setPhone(event.target.value)}
                />
            </div>
            <button type='submit' className='btn btn-dark btn-lg btn-block'>Register</button>
            <p className="forget-password text-center" onClick={handleClick}>Alredy registered login in?</p>   
        </form>
      ):(
        <Login/>
      )}     
    </div>
    </>
  );
}
export default Registration
