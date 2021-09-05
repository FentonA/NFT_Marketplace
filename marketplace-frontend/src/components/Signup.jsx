import {useMoralis} from "react-moralis";
import {useMoralisFile} from "react-moralis";
import FormInput from "./FormInput/FormInput";
import Button from "./Button/Button";
import React, { useState} from "react";

const Signup = () =>{
    const { signup, isAuthenticated, user} = useMoralis();
    const {saveFile} = useMoralisFile(0)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");

    return (
        <form>
            <FormInput
             placeholder="email"
             type="email"
             value ={email}
             onChange ={(event) => setEmail(event.currentTarget.value)}/>

            <FormInput
             placeholder="username"
             type="username"
             value ={username}
             onChange ={(event) => setUsername(event.currentTarget.value)}/>

            <FormInput
             placeholder="password"
             type="password"
             value ={password}
             onChange ={(event) => setPassword(event.currentTarget.value)}/>

            <FormInput
             placeholder=" upload avatar image"
             type="file"
             value ={avatar}
             onChange ={(event) => setAvatar(event.currentTarget.value)}/>

            <Button onClick = {() => signup(username, password, email)}>Sign up</Button>
        </form>
    )
}

export default Signup;