import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";

import { registerschema } from "../components/FormSchema/registerschema";
import {zodResolver} from "@hookform/resolvers/zod"



function Register () {
    const navigate=useNavigate();
    const{register,handleSubmit,formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    })

    function onSubmit1(data){
        console.log(data);
        alert("successfull");
        navigate("/login");
    }
    return ( 
        <>
        <form onSubmit={handleSubmit(onSubmit1)}>

        <input type="name"  placeholder="Enter your name" {...register("name")}/>
        <p>{errors.name?.message}</p>
        <br />


        <input type="email"  placeholder="Enter your email" {...register("email")}/>
        <p>{errors.email?.message}</p>
        <br />

        
        <input type="password"  placeholder="Enter your password" {...register("password")}/>
        <p>{errors.password?.message}</p>

          <input type="age"  placeholder="Enter your age" {...register("age")}/>
        <p>{errors.age?.message}</p>
        <br />
<button type="submit">Submit</button>
        
        </form>

        </>
     );
}

export default Register ;