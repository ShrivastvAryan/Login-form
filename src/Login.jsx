import { useState } from "react"

const URL="http://localhost:5000/api/auth/login";

export const LoginForm=()=>{

    const[user,setUser]=useState({
        email:"",
        password:""
    });

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setUser({
            ...user,
            [name]:value,
        })
    };

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            const response=await fetch(URL,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user),
            });

            

            if(response.ok){
                alert("Login successful")
                setUser({email:"", password:""});
            }
            else{
                alert("Invalid credential");
                console.log("invalid credential")
            }
        }catch(error){
            console.log(error);
        }
    }
    return(
        <>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-700 w-3/5 h-3/5 rounded-sm">
        <p className="text-white p-2 text-4xl text-center">Login Form</p>
        <form onSubmit={handleSubmit}>
           <div>
                    <label htmlFor="username" className=" text-white text-2xl p-2">Username or Email</label>
                    <input type="text" name="email"
                     placeholder="username"
                     required
                     autoComplete="off"
                    className=" m-2 bg-blue-100 p-1 rounded-md w-3/5"
                    value={user.email}
                    onChange={handleInput}/>
           </div>

           <div>
                    <label htmlFor="password" className=" text-white text-2xl p-2">Password</label>
                    <input type="password" name="password"
                     placeholder="password"
                     required
                     autoComplete="off"
                    className=" m-2 bg-blue-100 p-1 rounded-md"
                    value={user.password}
                    onChange={handleInput}/>
            </div>

            <button type="submit" className="bg-blue-300 p-1 text-xl m-6 rounded-md cursor-pointer">Login</button>

        </form>
        </div>
        </>
    )
}