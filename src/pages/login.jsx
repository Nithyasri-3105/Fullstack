
import { useState } from "react";




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function print() {
    console.log("Printing inside print function");
    console.log(email, password);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(email, password);
  };

  return (
     
    <div>
      <div className="text-cyan-500">HI!</div>

      <form onSubmit={handleSubmit}>
        <input type="text" id="username" placeholder="Enter your name"/>
        <br />

        <input type="email" id="email" placeholder="Enter your mail" value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>
        <br />

        <input type="password" required id="password" placeholder="Enter your password" name="password"
          value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />

        <button type="submit">Submit</button>

        <button type="button" onClick={print}>
          nSubmit
        </button>
      </form>
    </div>
    
  );
}

export default Login;