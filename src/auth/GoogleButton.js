import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { IsLoginState, memberIdState } from "../store/atom";
import axios from "axios";

export default function GoogleButton() {
  const setLogin = useSetRecoilState(IsLoginState);
  const setMemberId = useSetRecoilState(memberIdState);

  let history = useHistory();

  const onSuccess = async (credentialResponse) => {
    console.log(credentialResponse);
    const decodedToken = jwtDecode(credentialResponse.credential);
    console.log(decodedToken);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_URL}/user/create`,
        {
          userEmail: decodedToken.email,
          userName: decodedToken.name,
          userImage: decodedToken.picture,
        }
      );
      if (response.status === 200) {
        const uesrId = response.data; // memberId 받아오기
        setMemberId(uesrId);
        setLogin(true);
        history.push("/");
      } else {
        throw new Error("API request failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => onSuccess(credentialResponse)}
        onFailure={(error) => console.log(error)}
        useOneTap
      />
    </>
  );
}
