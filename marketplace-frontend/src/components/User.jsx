import {useMoralis} from "react-moralis"
import Button from "./Button/Button"


//Authenticate a user with metamask or web3 provider 

const User = () =>{
  const {Moralis, isInitialized, logout, authenticate, isAuthenticating, isAuthenticated, isUnauthenticated, web3, enableWeb3, isWeb3Enabled} = useMoralis()
  
  if(isAuthenticated){
    return(
      <div>
        <h1> Welcome to Vor </h1>
        <button onClick={() => logout()}></button>
      </div>

    )
  }

  else if(!isAuthenticated){
    return(
      <div>
        <Button onClick={() => authenticate()}>Authenticate</Button>
      </div>
    );
  }

  return (
    <div>
      <button isLoading = {isAuthenticating} onClick = {() => authenticate()}> </button>
    </div>
  );
};

export default User;