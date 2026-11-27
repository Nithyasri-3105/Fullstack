import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";




function Login() {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const location=useLocation();
    const[logindata,setLogindata]=useState({
      username:'',
      password:''
    })
    const navigate=useNavigate();


  function print() {
    console.log("Printing inside print function");
    console.log(logindata);
  }
  function handlechange(e){
    setLogindata({
      ...logindata,
      [e.target.name]:e.target.value
    });
  }

  const handleSubmit = (e) => {e.preventDefault();
    const registerdata=location.state;
    if(logindata.username===registerdata.name && logindata.password===registerdata.password){
    
    console.log("Login success");
    navigate("/dashboard",{
      state:logindata
    })
    }else{
      console.log("if not success");
    }
    console.log("Login data",logindata);
    console.log("Register data",registerdata);
     
   
  };
    
    
   
  return (
     
   
      
<div className="flex justify-center min-h-screen items-center bg-gray-100">
  
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
       {/*<input type="text" id="username" placeholder="Enter your name"/>
        <br />*/}
          <h1 className="text-3xl font-bold text-600 text-center mb-6">
                    Login
                </h1>
<label htmlFor="name" className="text-lg font-semibold">Name :</label>
        <input type="name" id="name" placeholder="Enter your name" className="w-full border p-2 rounded mb-2" name="username"  
          onChange={handlechange}
          required/>
        <br />
<label htmlFor="password" className="text-lg font-semibold">Password :</label>
        <input type="password" required id="password" placeholder="Enter your password" className="w-full border p-2 rounded mb-2" name="password" 
          onChange={handlechange}/>
        <br />

        <button type="submit" className="w-full bg-pink-600 text-white text-lg font-semibold p-2 rounded hover:bg-pink-700">Submit</button>

        {/*<button type="button" onClick={print}>nSubmit</button>*/}
      </form>
    </div>
   
  
    
  );
}

export default Login;