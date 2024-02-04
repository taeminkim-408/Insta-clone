import SideBarComponent from "../components/SideBar";
import styled from "styled-components";
import Profile from "./Profile";
import GoogleButton from "../auth/GoogleButton";
import GooglePart from "../components/GooglePart";

const Container = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  flex: 0 0 auto;
  height: 100vh;
`;

const MainSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
function LoginPage() {
  return (
    <>
      <Container>
        <SideBar>
          <SideBarComponent />
        </SideBar>
        <MainSection>
          <GooglePart />
        </MainSection>
      </Container>
    </>
  );
}

export default LoginPage;
