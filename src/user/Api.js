import config from "../config";
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from "amazon-cognito-identity-js";

export function signUpUser(email, password) {
  const userPool = new CognitoUserPool({
    UserPoolId: config.cognito.USER_POOL_ID,
    ClientId: config.cognito.APP_CLIENT_ID
  });

  console.log("email", email);
  console.log("password", password);

  userPool.signUp(email, password, [], null, function(err, result){
      console.log("result", result);
      if (err) {
          alert(err);
          return;
      }
      const cognitoUser = result.user;
      console.log('user name is ' + cognitoUser.getUsername());
      return cognitoUser;
  });
}

export function login(email, password) {
  console.log("login email", email);
  console.log("login password", password);
  const userPool = new CognitoUserPool({
    UserPoolId: config.cognito.USER_POOL_ID,
    ClientId: config.cognito.APP_CLIENT_ID
  });
  const user = new CognitoUser({ Username: email, Pool: userPool });
  const authenticationData = { Username: email, Password: password };
  const authenticationDetails = new AuthenticationDetails(authenticationData);

  return new Promise( (resolve, reject) =>
    user.authenticateUser(authenticationDetails, {
      onSuccess: result => resolve(user.getUsername()),
      onFailure: err => reject(err)
    }) )

}
