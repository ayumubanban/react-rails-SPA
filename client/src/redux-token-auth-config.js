import { generateAuthActions } from "redux-token-auth"
import { authUrl } from "./constants"

const config = {
  authUrl: authUrl,
  userAttributes: {
    nickname: "nickname",
    // image: "image"
  },
  userRegistrationAttributes: {
    nickname: "nickname",
    // image: "image",
    // password_confirmation: "password_confirmation"
  }
};

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials
};