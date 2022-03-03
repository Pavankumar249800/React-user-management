import React, { useState } from 'react'  
import axios from 'axios';  

function Newrole(props) {  
  const [data, setdata] = useState({name: '', description: ''})  
  const apiUrl = "http://127.0.0.1:8000/management/roles-api/";  
  const CreatingRole = (e) => {  
    e.preventDefault();  
    const data1 = {name: data.name, description: data.description};  
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
                <form onSubmit={CreatingRole} className="user">  
                  {/* <div className="form-group row"> */}
                  <div className="form-group"> 
                    <label>Name</label> 
                      <input type="text" name="name" onChange={onChange} value={data.name} className="form-control" id="exampleLastName" placeholder="name" />  
                    </div> 
                    <div className="form-group"> 
                    <label>Description</label> 
                      <input type="text" name="description" onChange={onChange} value={data.description} className="form-control" id="exampleFirstName" placeholder="description" />  
                    </div>  
                  <button type="submit" className="btn btn-success  btn-block">  
                    Create Role  
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
  
export default Newrole  