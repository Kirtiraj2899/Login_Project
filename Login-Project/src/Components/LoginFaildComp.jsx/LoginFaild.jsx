import { Link } from "react-router-dom";
import "./LoginFailsty.css";
const LoginFaild = () => {
  return (
    <>
        <div className="loginfailContainer">
        
             <h3>Login Faild</h3>
            <button><Link to="/">Go to Login  Page</Link></button>
            <br />
            <button ><Link to='/Employee'>Go to Employee Page</Link></button>
        
    </div>
    </>
  )
}

export default LoginFaild
