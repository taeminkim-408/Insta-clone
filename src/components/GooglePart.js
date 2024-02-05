import styled from "styled-components";
import GoogleButton from "../auth/GoogleButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  padding: 0 20px;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export default function GooglePart() {
  return (
    <Container>
      <h1> 구글 로그인하기 </h1>
      <GoogleButton />
    </Container>
  );
}
