import '../css/login.css';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";
import { useState } from 'react';
import AXIOS from 'axios';
import { useNavigate } from 'react-router-dom';
function Login(){
  const [name,setName]=useState('');
  const [passw,setPassw]=useState('');
  const nextpage = useNavigate('');

  async function log(e){
    e.preventDefault();
    try {
      await AXIOS.post("http://localhost:9000/submit",{
        name,passw
      }).then((res)=>{
        if (res.data == "exist"){
          nextpage("/home",sessionStorage.setItem('username',name));
        }else if (res.data == "not exist"){
          alert("User have not signup")
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
    e.target.reset();
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
                    <h4 class="mb-4 pb-3 text-light">Log In</h4>
                    <form onSubmit={log}>
                    <div class="form-group" >
                      <input type="text" name="name" class="form-style"  onChange={(e)=>setName(e.target.value)}
                      placeholder="Username" id="logname" autoComplete='off' required/>
                      <i class="input-icon uil uil-user"><FaUserCheck style={{fill:"#F7EEAA"}}/></i>
                    </div>
                    <div class="form-group mt-2">
                      <input type='password'  name="logpass" class="form-style"
                       onChange={(e)=>setPassw(e.target.value)}
                       required placeholder="Your Password" id="logpass" />
                      <i class="input-icon uil uil-lock-alt"><RiLockPasswordFill style={{fill:"#F7EEAA"}}/>
                     </i>
                    </div>
                    <button class="btns mt-4">submit</button>
                    <p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a><br />
                    <a href="/register" class="link">New here? Sign up</a></p>
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
export default Login;