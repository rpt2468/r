import React ,{useState} from "react";
import "../SaSS/login.css";

function Login() {

    const [userName, setuserName] = useState('')
    const [password, setPassword] = useState('')

    const handleUserNameChange = (event) =>{
        setuserName(event.target.value);
        console.log("Name changed to " , {userName});
    }
      
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
        console.log("Password changed to " , {password});
    }
    const handleSubmit =(event) => {

        console.log("Form submitted")
        event.preventDefault();
    }
  return (
      <div className="center-item">
          
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Enter username" value={userName} onChange={handleUserNameChange} />
          <input type="password" name="password" placeholder="Enter password"  value={password} onChange={handlePasswordChange}  />
          <button type="submit" >Login</button>
          <p>
            Not Registered ?<a href="#">Create account Now!</a>
          </p>
        </form>
      </div>
  );
}

export default Login;
