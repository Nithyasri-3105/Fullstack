
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function Login() {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
    const[formdata,setFormdata]=useState({
      username:'',
      password:''
    })
    const navigate=useNavigate();

  function print() {
    console.log("Printing inside print function");
    console.log(formdata);
  }
  function handlechange(e){
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value
    });
  }

  const handleSubmit = (e) => {e.preventDefault();
     console.log("Login success",formdata);
    alert("Login Successful")
    navigate("/dashboard",{
      state:formdata
    })
   
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