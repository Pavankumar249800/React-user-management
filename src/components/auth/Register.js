import React, { useState } from 'react'  
import axios from 'axios';  

function Register(props) {  
  const [data, setdata] = useState({username: '', email: '', password: '' })  
  const apiUrl = "http://127.0.0.1:8000/management/register-api/";  
  const Registration = (e) => {  
    e.preventDefault();  
    const data1 = {username: data.username, email: data.email, password: data.password  };  
    console.log(data1);
    axios.post(apiUrl, data1)  
      .then((result) => {    
       console.log(result.data); 
        setdata(result.data);
        window.location = "/retrieve"
        // if (result.data.Status == 'Invalid')  
        //   alert('Invalid User');  
        // else  
        //   props.history.push('/Dashboard') 
       // this.props.resetdata(data); 
      })  
  }  
  const onChange = (e) => {  
    e.persist();    
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  return (  
    <div className="container">  
      <div className="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div className="card-body p-0">  
          <div className="row">  
            <div className="col-lg-12">  
              <div className="p-5">  
                <div className="text-center">  
                  <h1 className="h4 text-gray-900 mb-4">Create a New User</h1>  
                </div>  
                <form onSubmit={Registration} className="user">  
                  {/* <div className="form-group row"> */}
                  <div className="form-group">  
                  <label>UserName</label>
                    <input type="text" name="username" onChange={onChange} value={data.username} className="form-control" id="exampleInputEmail" placeholder="username" />  
                  </div>  
                    <div className="form-group"> 
                    <label>Email</label> 
                      <input type="text" name="email" onChange={onChange} value={data.email} className="form-control" id="exampleFirstName" placeholder="email" />  
                    </div>  
                    <div className="form-group"> 
                    <label>Password</label> 
                      <input type="Password" name="password" onChange={onChange} value={data.password} className="form-control" id="exampleLastName" placeholder="password" />  
                    </div>  
                  {/* </div>   */}
                  
                  {/* <div className="form-group row">  
                    <div className="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="City" onChange={onChange} value={data.City} className="form-control" id="exampleInputPassword" placeholder="City" />  
                    </div>  
                    <div className="col-sm-6">  
                      <input type="text" name="Department" onChange={onChange} value={data.Department} className="form-control" id="exampleRepeatPassword" placeholder="Department" />  
                    </div>  
                  </div>   */}
                  <button type="submit" className="btn btn-primary  btn-block">  
                    Create User  
                </button>  
                  <hr />  
                </form>  
                <hr />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default Register  