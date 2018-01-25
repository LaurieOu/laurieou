import config from "../config";
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from "amazon-cognito-identity-js";

const userPool = new CognitoUserPool({
  UserPoolId: config.cognito.USER_POOL_ID,
  ClientId: config.cognito.APP_CLIENT_ID
});

export function signUpUser(email, password) {
  return new Promise((resolve, reject) =>
    userPool.signUp(email, password, [], null, (err, result) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(result.user);
    })
  );
}

export function login(email, password) {
  const user = new CognitoUser({ Username: email, Pool: userPool });
  const authenticationData = { Username: email, Password: password };
  const authenticationDetails = new AuthenticationDetails(authenticationData);

  return new Promise( (resolve, reject) =>
    user.authenticateUser(authenticationDetails, {
      onSuccess: result => resolve(user.getUsername()),
      onFailure: err => reject(err)
    }) )

}
