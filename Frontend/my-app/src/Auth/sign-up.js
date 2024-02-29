import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/signup.css';


function SignUpPage() {
  


  const navigate = useNavigate();


  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [status,setstatus]=useState('');

  function handlesubmit(event){
    event.preventDefault()
    if(username.length<=4){
      alert("username should have more than 8 characters")
    }
    else if(password.length<8){
      alert("Password length should be more that 8")
    }
    else if(confirmpassword!=password){
      alert("Passwords don't match")
    }
    else{
      setusername('')
      setemail('')
      setpassword('')
      setconfirmpassword('')
      insertArticle()
      navigate('/home')
    }
  }

  const handleChangeusername = (event) => {
    setusername(event.target.value);
  }

  const handleChangeemail = (event) => {
    setemail(event.target.value);
  }

  const handleChangepassword = (event) => {
    setpassword(event.target.value);
  }

  const handleChangeconfirmpassword = (event) => {
    setconfirmpassword(event.target.value);
  }

  
  
     //data insertion
     function InsertArticle(body){
      return fetch(`http://127.0.0.1:5000/signup`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
      })
    .then(response => response.json())
    .then(jsonData => {
      setstatus(jsonData)
      })
    .catch(error => console.log(error))
    }
  
    const insertArticle = () =>{
          InsertArticle({username,email,password})
          .then((response) => InsertArticle(response))
          .catch(error => console.log('error',error))
        }
   



  return (
    <div className="back12">
      <div className="container11">
        <form className="signup-form" onSubmit={handlesubmit}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" 
            value={username}  
            onChange={handleChangeusername}
            required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" 
            value={email} 
            onChange={handleChangeemail}
            required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" value={password}  
            onChange={handleChangepassword}
             required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" value={confirmpassword}  
            onChange={handleChangeconfirmpassword}
             required />
          </div>
          <div className="form-group">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
