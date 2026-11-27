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
     
    <div>
      <div className="text-cyan-500">HI!</div>

      <form onSubmit={handleSubmit}>
       {/*<input type="text" id="username" placeholder="Enter your name"/>
        <br />*/}

        <input type="name" id="username" placeholder="Enter your name" name="username"  
          onChange={handlechange}
          required/>
        <br />

        <input type="password" required id="password" placeholder="Enter your password" name="password" 
          onChange={handlechange}/>
        <br />

        <button type="submit">Submit</button>

        <button type="button" onClick={print}>nSubmit</button>
      </form>
    </div>
    
  );
}

export default Login;