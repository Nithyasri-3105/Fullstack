
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Projects from "./pages/projects";
import Tasks from "./pages/tasks";



function App() {
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
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/tasks" element={<Tasks/>}></Route>
      </Routes>
      </BrowserRouter>
 
  );
}

export default App;
