import {useMorlis} from "react-moralis";

const Login = () =>{
    const {login} = useMoralis();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

return (
        <div id ="loginInfo">
            <h4> Enter your credentials</h4>
            <input type="text" id="Username" required placeholder="Enter username"/>
            <input type="text" id="Password" required placeholder="Enter password"/>
            <button onClick = {() => Login(username, password)}Login>Login</button>
        </div>
    )
}

export default Login;