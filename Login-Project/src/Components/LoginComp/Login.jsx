import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginsty.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigate = useNavigate();
    
    function handleLogin (){
        
        if(username === "admin123@gmail.com" && password === "admin@123"){
            navigate("/Employee"); 
            alert("Login Successful...")
        } 
       
        else{
            navigate("/LoginFaild");
        }
    }

    function togglePasswordVisibility() {
        setIsPasswordVisible(!isPasswordVisible); // Toggle password visibility
    }
  return (
    <>
    
    <div className="loginContainer">
        <img src="../img/logo.jpg" alt="img" id="logo"/>
        <h3>KK TECH PVT LTD</h3><br />
        
            <input type="text" placeholder="Enter Username " id="username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            <br />
            <input type={isPasswordVisible ? "text" : "password"} placeholder="Enter Password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <button onClick={togglePasswordVisibility} id="passvisible">
                    {isPasswordVisible ? <img src="../img/hidepass.jpg" alt="img" /> : <img src="../img/showpass.jpg" alt="img" />}
            </button>
            <br />
            <button className="loginbtn" type="submit" onClick={handleLogin}>Login</button>

    </div>
    </>
  )
}

export default Login
