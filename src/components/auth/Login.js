import React, { useState, useEffect } from 'react'   
import axios from 'axios'; 
import { useHistory } from "react-router-dom";

function Login(props) {  
    const [employee, setemployee] = useState({ username: '', password: ''});  
    const apiUrl = "http://127.0.0.1:8000/management/api-token/"; 
    let history = useHistory();   
    const LogIn = (e) => {    
            e.preventDefault();    
            //debugger;   
            const data = { username:employee.username, password: employee.password };  
            console.log(data);   
            axios.post(apiUrl, data)    
            .then((result) => {    
              
              console.log(result.data); 
              let token = result.data['token'];
              localStorage.setItem('token', token);
               console.log(token);
                setemployee(result.employee);  
              //   const serializedState = JSON.stringify(result.data.UserDetails);  
              //  var a= localStorage.setItem('myData', serializedState);   
              //   console.log("A:",a)  
              //   const user =result.data.UserDetails;  
              //   console.log(result.data.message);  
               // if (result.data.status == '200')    
                //   props.history.push('/users')  ;
 
               // history.push('/roles');
              window.location = "/roles";
              //  else    
              //  alert('Invalid User');    
            })        
          };    
          // if(token) {
          //   return true ;
          // }
          // else {
          //   window.location = '/login';
          //   throw "No token saved!"
          // }
          const onChange = (e) => {    
                e.persist();    
                //debugger;    
                setemployee({...employee, [e.target.name]: e.target.value});    
              }    
    return (  
        
        <div className="container">  
        <div className="row justify-content-center">  
          <div className="col-xl-10 col-lg-12 col-md-9">  
            <div className="card o-hidden border-0 shadow-lg my-5">  
              <div className="card-body p-0">  
                <div className="row">  
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>  
                  <div className="col-lg-6">  
                    <div className="p-5">  
                      <div className="text-center">  
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>  
                      </div>  
                      <form onSubmit={LogIn} className="user">  
                        <div className="form-group">  
                          <input type="text" className="form-control" value={employee ? employee.username:" "} onChange={ onChange }  name="username" id="username" aria-describedby="usernameHelp" placeholder="Enter username"/>  
                        </div>  
                        <div className="form-group">  
                          <input type="password" className="form-control" value={employee ? employee.password:" "} onChange={ onChange }  name="password" id="DepPasswordartment" placeholder="Password"/>  
                        </div>  
                        {/* <div className="form-group">  
                          <div className="custom-control custom-checkbox small">  
                            <input type="checkbox" className="custom-control-input" id="customCheck"/>  
                            <label className="custom-control-label" for="customCheck">Remember Me</label>  
                          </div>  
                        </div> */}  
                        <button type="submit" classNameName="btn btn-info mb-1" block><span>Login</span></button>    
                        <hr/>  
                      </form>  
                      <hr/>  
                    </div>  
                  </div>  
                </div>  
              </div>  
            </div>  
           </div>  
          </div>  
        </div>  
    )  
}  
  
export default Login  