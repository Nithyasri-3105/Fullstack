
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/projects";
import Tasks from "./pages/tasks";
import Login from "./pages/login";
import Settings from "./pages/settings";
import Dashboard from "./pages/dashboard";
import Clients from "./pages/clients";
import Calendar from "./pages/calendar";
import Team from "./pages/team";




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
    <Route path="/projects" element={<Projects/>}></Route>
    <Route path="/tasks" element={<Tasks/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/calendar" element={<Calendar/>}/>
    <Route path="/clients" element={<Clients/>}></Route>
    <Route path="/team" element={<Team/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/settings" element={<Settings/>}></Route>

   </Routes>
   </BrowserRouter>
 
  );
}

export default App;
