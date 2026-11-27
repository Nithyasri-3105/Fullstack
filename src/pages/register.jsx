import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";

import { registerschema } from "../components/FormSchema/registerschema";
import {zodResolver} from "@hookform/resolvers/zod"



function Register () 
{
    const navigate=useNavigate();
    const{register,handleSubmit,formState:{errors}}=useForm({resolver: zodResolver(registerschema)
    })

    function onSubmit1(data){
        console.log(data);
        alert("successfull");
        navigate("/login",{
            state:data
        });
    }
    return ( 
        <>
        <div className="flex justify-center min-h-screen items-center bg-gray-300">
            
        <form onSubmit={handleSubmit(onSubmit1)}
            className="bg-white p-8 rounded-lg shadow-lg w-96">
  <h1 className="text-3xl font-bold text-600 text-center mb-6">
                    Register
                </h1>
        <label htmlFor="name" className="text-lg font-semibold">Name :</label>
        <input type="text"  placeholder="Enter your name" id="name" className="w-full border p-2 rounded mb-2" {...register("name")}/>
        <p className="text-red-500 text-sm"></p>
        <p>{errors.name?.message}</p>
        <br />

<label htmlFor="email" className="text-lg font-semibold">Email :</label>
        <input type="email"  placeholder="Enter your email" id="email" className="w-full border p-2 rounded mb-2" {...register("email")}/>
        <p className="text-red-500 text-sm"></p>
        <p>{errors.email?.message}</p>
        <br />


<label htmlFor="password" className="text-lg font-semibold">Password :</label>
        <input type="password"  placeholder="Enter your password" id="password" className="w-full border p-2 rounded mb-2" {...register("password")}/>
        <p className="text-red-500 text-sm"></p>
        <p>{errors.password?.message}</p>
        <br/>


<label htmlFor="age" className="text-lg font-semibold">Age :</label>
          <input type="number"  placeholder="Enter your age" id="age" className="w-full border p-2 rounded mb-2" {...register("age")}/>
          <p className="text-red-500 text-sm"></p>
        <p>{errors.age?.message}</p>
        <br />
<button type="submit" className="w-full bg-pink-600 text-white text-lg font-semibold p-2 rounded hover:bg-pink-700">Submit</button>
        
        </form>
</div>
        </>
     );
}

export default Register ;