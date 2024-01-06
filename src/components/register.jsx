import '../css/login.css';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { useState } from 'react';
import AXIOS from 'axios';
import { useNavigate } from 'react-router-dom';

function Register(){
        const [name,setName]=useState('');
        const [email,setEmail]=useState('');
        const [passw,setPassw]=useState('');
        const nextpage=useNavigate('');
      const Sign=(e)=>{
          e.preventDefault();
          const url="http://localhost:9000/sign"
          AXIOS.post(url,{name,email,passw}).then((res)=>{
            alert(res.data)
            nextpage('/')
            
          })
      }
    return(
        <>
 

<div class="section">
  <div class="container">
    <div class="row full-height justify-content-center">
      <div class="col-12 text-center align-self-center py-5">
        <div class="section pb-5 pt-5 pt-sm-2 text-center">
          <div class="card-3d-wrap mx-auto">
            <div class="card-3d-wrapper">
              <div class="card-front">
                <div class="center-wrap">
                  <div class="section text-center">
                    <h4 class="mb-4 pb-3 text-light">Sign Up</h4>
                    <form id='myform' onSubmit={Sign}>
                    <div class="form-group" >
                      <input type="text" name="name" class="form-style"  onChange={(e)=>setName(e.target.value)}
                      placeholder="Username" id="logname" autoComplete='off' required/>
                      <i class="input-icon uil uil-user"><FaUserCheck style={{fill:"#F7EEAA"}}/></i>
                    </div>
                    <div class="form-group mt-2">
                      <input type="email" name="email" class="form-style" onChange={(e)=>setEmail(e.target.value)} 
                      placeholder="Your Email" id="logemail" autoComplete='off' required/>
                      <i class="input-icon uil uil-at"><MdOutlineAlternateEmail style={{fill:"#F7EEAA"}}/></i>
                    </div>
                    <div class="form-group mt-2">
                      <input type="password" name="passw" class="form-style" onChange={(e)=>setPassw(e.target.value)}
                       placeholder="Your Password" id="logpass" autoComplete='off' required/>
                      <i class="input-icon uil uil-lock-alt"><RiLockPasswordFill style={{fill:"#F7EEAA"}}/></i>
                    </div>
                    <button class="btns mt-4">submit</button>
                    <p class="mb-0 mt-4 text-center">
                    <a href="/" class="link">Already a user? Login</a></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
    
   
    
}
export default Register;