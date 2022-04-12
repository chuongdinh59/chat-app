import React from "react";
import firebase, { auth } from "../firebase/config";
import addDocument from "../utils/addDocument";
import { generateKeywords } from "../utils/generatedKey";
const facebookProvider = new firebase.auth.FacebookAuthProvider();
function Login(props) {
  const handleFaceBookLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(
      facebookProvider
    );
    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        key: generateKeywords(user.displayName),
      });
    }
  };
  return (
    <div className="login">
      <div className="login-btn">
        <button className="btn btn-login" onClick={handleFaceBookLogin}>
          Đăng nhập bằng Facebook
        </button>
        <button className="btn btn-login">Đăng nhập bằng Google</button>
      </div>
    </div>
  );
}

export default Login;
