import React, { useState } from 'react'  
import axios from 'axios';  

function Newuser(props) {  
  const [data, setdata] = useState({name: '', email: '', usernameasemail: '',username:'' })  
  const apiUrl = "http://127.0.0.1:8000/management/users-api/";  
  const Registration = (e) => {  
    e.preventDefault();  
    const data1 = {name: data.name, email: data.email, usernameasemail:data.usernameasemail, username:data.username };  
    console.log(data1);
    axios.post(apiUrl, data1)  
      .then((result) => {    
       console.log(result.data); 
        setdata(result.data);
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
                    <label>Name</label> 
                      <input type="text" name="name" onChange={onChange} value={data.name} className="form-control" id="exampleLastName" placeholder="name" />  
                    </div> 
                    <div className="form-group"> 
                    <label>Email</label> 
                      <input type="email" name="email" onChange={onChange} value={data.email} className="form-control" id="exampleFirstName" placeholder="email" />  
                    </div>  
                  <div className="form-group">  
                  <label>UserNameasEmail</label>
                    <input type="radio" name="usernameasemail" onChange={onChange}  className="form-control" id="exampleInputEmail"  />  
                  </div>  
                  <div className="form-group">  
                  <label>UserName</label>
                    <input type="text" name="username" onChange={onChange} value={data.username} className="form-control" id="exampleInputEmail" placeholder="username" />  
                  </div>  
                  <button type="submit" className="btn btn-success  btn-block">  
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
  
export default Newuser  