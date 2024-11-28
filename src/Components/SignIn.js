import { Link } from 'react-router-dom';
import { useState } from "react";

function SignIn() {

    const [currentUservalue, updateUservalue] = useState("")
    const [currentPasswordvalue, updatePasswordvalue] = useState("")

    const signinHandler = () => {
        if (currentUservalue === "" || currentPasswordvalue === "") {
            console.log("It is an invalid value")
        } 
        else {
            console.log(currentUservalue);
            console.log(currentPasswordvalue);
        }
    }

    return (
        <div className='card' id="login">
            
                <h2>Login</h2>

                <div id="username">Username
                </div>
                <input type="text" placeholder="Type your Username" value={currentUservalue} onChange={(e) => {
                    updateUservalue(e.target.value)
                }}/>
                <br/>
                <div id="password">Password</div>
                <input type="text" placeholder="Type your Password" value={currentPasswordvalue} onChange={(e) => {
                    updatePasswordvalue(e.target.value)
                }}/><br/>


                <button type="submit" onClick={signinHandler} className="btn btn-primary" id="button">LOGIN</button><br/>

                <Link to='/signup' id="link">or Sign_Up</Link><br/>

                <div>
                <Link to="#" className="fa fa-facebook"></Link>
                <Link to="#" className="fa fa-twitter"></Link>
                <Link to="#" className="fa fa-google"></Link>
                </div>
            
        </div>
    );
}

export default SignIn;