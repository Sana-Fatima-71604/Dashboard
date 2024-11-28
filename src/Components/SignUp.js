import { Link } from 'react-router-dom';
import { useState } from "react";

function SignUp() {

    const [currentUservalue, updateUservalue] = useState("")
    const [currentPasswordvalue, updatePasswordvalue] = useState("")
    const [currentEmailvalue, updateEmailvalue] = useState("")

    const signinHandler = () => {
        if (currentUservalue === "" || currentPasswordvalue === "" || currentEmailvalue === "") {
            console.log("It is an invalid value")
        } 
        else {
            console.log(currentUservalue);
            console.log(currentPasswordvalue);
            console.log(currentEmailvalue);
        }
    }

    return (
        <div className='card' id ='signUp'>

                <h2>Sign Up</h2>

                <div id="email">Email Id: 
                </div>

                <input type="email" placeholder="Type your Usermail" value={currentEmailvalue} onChange={(e) => {
                    updateEmailvalue(e.target.value)
                }}/>
                <br/>

                <div id="username">Username: 
                </div>

                <input type="text" placeholder="Type your Username" value={currentUservalue} onChange={(e) => {
                    updateUservalue(e.target.value)
                }}/>
                <br/>

                <div id ="password">Password: 
                </div>

                <input type="text" placeholder="Type your Password" value={currentPasswordvalue} onChange={(e) => {
                    updatePasswordvalue(e.target.value)
                }}/><br/><br/>

                <button type="submit" onClick={signinHandler} className="btn btn-primary" id="button">SIGN UP</button>
                <br/>
                <Link to='/signin' id="link">or Sign_In</Link><br/>
                

                <div>
                <Link to="#" className="fa fa-facebook"></Link>
                <Link to="#" className="fa fa-twitter"></Link>
                <Link to="#" className="fa fa-google"></Link>
                </div>

        </div>
    );
};

export default SignUp;