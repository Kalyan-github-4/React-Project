import React from 'react'
import { useState } from 'react'
import "./Form.css"

const Form = () => {
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorUserName, setErrorUserName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfrimPassword, setErrorConfirmPassword] = useState("");

    const [userColor, setUserColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [passwordColor, setPasswordColor] = useState("");
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

    const validate = (event) => {
        event.preventDefault();
        if (username.length > 8) {
            setErrorUserName('')
            setUserColor("green")
        } else {
            setErrorUserName("Let’s make that username a bit longer — at least 8 characters!")
            setUserColor("red")

        }

        if (email.includes("@gmail")) {
            setErrorEmail('')
            setEmailColor("green")
        } else {
            setErrorEmail("Oops! Your email should include '@gmail'")
            setEmailColor("red")

        }
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

        if (passwordRegex.test(password)) {
            setErrorPassword('');
            setPasswordColor('green');
        } else {
            setErrorPassword('Make your password stronger: 8+ chars, 1 uppercase, 1 special character!');
            setPasswordColor('red');
        }


        if (confirmPassword === password) {
            setErrorConfirmPassword('')
            setConfirmPasswordColor("green")
        } else {
            setErrorConfirmPassword("Passwords don’t match — try again!")
            setConfirmPasswordColor("red")

        }
    }

    return (
        <>
            <div className="card">
                <div className="card-image"></div>
                <form>
                    <input type="text" placeholder='Name' value={username} onChange={e => setusername(e.target.value)} style={{ borderColor: userColor }} />
                    <p className='error'>{errorUserName}</p>

                    <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} style={{ borderColor: emailColor }} />
                    <p className='error'>{errorEmail}</p>

                    <input type="text" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} style={{ borderColor: passwordColor }} />
                    <p className='error'>{errorPassword}</p>

                    <input type="text" placeholder='Confirm Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} style={{ borderColor: confirmPassword }} />
                    <p className='error'>{errorConfrimPassword}</p>

                    <button className='submit-btn' onClick={validate}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form