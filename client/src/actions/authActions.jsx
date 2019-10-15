import axios from "axios"

// export const signIn = (credentials) => {
//   return (dispatch) => {
//     axios.post("/auth/sign_in", credentials)
//       .then((response)=>{
//         console.log(response)
//           localStorage.setItem("access-token", response.headers["access-token"]);
//           localStorage.setItem("client", response.headers.client);
//           localStorage.setItem("uid", response.headers.uid);
//         dispatch({ type: "LOGIN_SUCCESS" });
//       })
//       //   response => {
//       //   localStorage.setItem("access-token", response.headers["access-token"]);
//       //   localStorage.setItem("client", response.headers.client);
//       //   localStorage.setItem("uid", response.headers.uid);
//       //   // console.log(response);
//       //   // console.log(localStorage);
//       //   this.props.history.push("/");
//       // })
//       .catch((err) => {
//         console.log(err)
//         dispatch({ type: "LOGIN_ERROR", err })
//         // error => console.log("error", error)
//       });
//   }
// }

export const signIn = () => {
  return {
    type: "SIGNIN_SUCCESS"
  }
}

export const signOut = () => {
  return {
    type: "SIGNOUT_SUCCESS"
  }
}

export const signUp = () => {
  return {
    type: "SIGNUP_SUCCESS"
  }
}