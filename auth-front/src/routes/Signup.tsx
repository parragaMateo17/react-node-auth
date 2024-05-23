import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { API_URL } from "../auth/Constants";
export default function Signup(){

    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/signup`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, username, password
                })
            })

            if(response.ok){
                console.log("user created")
            }else{
                console.log("Something went wrong")
            }
        } catch (error) {
            
        }
    }


    const auth = useAuth()

    if(auth.isAuthenticated){
        return <Navigate to="/Dashboard"/>
    }
    return (

        <DefaultLayout>    
        <form className="form" onSubmit={handleSubmit}>
             <h1>Signup</h1>
             <label>Username</label>
             <input 
                type="text" 
                value={username}
                onChange={(e)=> setUsername(e.target.value)} />
             
             <label>Name</label>
             <input 
                type="text" 
                value={name}
                onChange={(e)=> setName(e.target.value)}/>

             <label>Password</label>
             <input 
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)} />

             <button>Signup</button>
        </form>
        </DefaultLayout>
    )
}