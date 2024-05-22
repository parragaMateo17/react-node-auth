import DefaultLayout from "../layout/DefaultLayout";

export default function Signup(){

    return (

        <DefaultLayout>    
        <form className="form">
             <h1>Signup</h1>
             <label>Username</label>
             <input type="text" />
             
             <label>Name</label>
             <input type="text" />

             <label>Password</label>
             <input type="password" />

             <button>Signup</button>
        </form>
        </DefaultLayout>
    )
}