import react from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
};

const SignInScreen = () => {
  return (
    <div>
      <h1>Sign in</h1>
      <p>Please sign in to continue</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default SignInScreen;