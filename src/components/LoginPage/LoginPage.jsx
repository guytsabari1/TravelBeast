import { Context } from '../../context/context';
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import '../LoginPage/LoginPage.css';
import '../../../usersData.json'

function LoginPage() {
  const { usersData,setTopNavName,setCart,setEvents } = useContext(Context);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [username,setusername] =useState()
  const [password1,setPassword1] =useState()
  const [password2,setPassword2] =useState()
  

  const onSubmit = (userDetails) => {

    usersData.map(item => {
      if (item.username == userDetails.username && item.password == userDetails.password) {
        localStorage.setItem("loginName", item.username);
        setTopNavName(item.username)
        const cart = localStorage.getItem(`${item.username}Favorites`)
        setCart(JSON.parse(cart)|| [])
        const userCalendar = localStorage.getItem(`${item.username}Events`)
        setEvents(JSON.parse(userCalendar) || [])
        navigate("/home");
    
        return;
      }

      else (
       console.log('Invalid username or password')
      )
    });

  
  }
     
  function sign() {

    if (username === '') {
      alert('Choose your username');
    } else {
      if (password1 === '') {
        alert('Enter a password');
      } else {
        if (password1 !== password2) {
          alert('Passwords do not match');
        } else {
          if (password1.length < 6 || password1.length > 18) {
            alert('Password length should be between 6 and 18 characters');
          } else {
            if (username.length < 6 || username.length > 18) {
              alert('Username length should be between 6 and 18 characters');
            } else {
              alert('You signed up successfully');
            }
          }
        }
      }
    }
  }


  return (
    <div className="main">
      <div className="login">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>Log in</label>
          <input {...register("username")} className="input" type="text" name="username" placeholder="User Name" required />
          <input {...register("password")} className="input" type="password" name="password" placeholder="Password" required />
          <button type="submit">Log in</button>
        </form>
      </div>


      <div className="main">
      <div className="login">
        <form className="form">
          <label>Sign Up</label>
          <input className="input" type="text" name="username" value={username} placeholder="User Name" required onChange={e=>setusername(e.target.value)}/>
          <input className="input" type="password" name="password" value={password1} placeholder="Password" required onChange={e=>setPassword1(e.target.value)}  />
          <input className="input" type="password" name="password" value={password2} placeholder="Password" required onChange={e=>setPassword2(e.target.value)} />
          <button type="submit" onClick={()=>sign()}>Sign Up</button>
        </form>
      </div>
    </div>

    </div>

    
  );
}

export default LoginPage;

