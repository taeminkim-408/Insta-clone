import { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Addpost from "./Addpost";
import PostDialog from "./PostDialog";
import TextsmsIcon from '@mui/icons-material/Textsms';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// 포스트 목록
const posts = [
  {
    postId: 1,
    postText: "리액트 공부중…",
    image:
      "https://velog.velcdn.com/images/dooooh2/post/e03d49ee-8c38-4195-ae3e-1ca6668d9581/image.png",
    p_like: 3,
  },
  {
    p_id: 2,
    p_text: "마라탕먹고싶다",
    p_image: "https://www.foodjang.com/New/05/221806880/221806880_b_1.jpg",
    p_like: 120,
  },
  {
    p_id: 3,
    p_text: "오늘은 뭐하지",
    p_image:
      "https://www.thecookierookie.com/wp-content/uploads/2018/07/bulletproof-coffee-recipe-5-of-9.jpg",
    p_like: 210,
  },
  {
    p_id: 4,
    p_text: "한동에는 눈폭탄이 떨어졌습니다",
    p_image:
      "https://sarang.handong.edu/dcp/editor/images/%5B%ED%81%AC%EA%B8%B0%EB%B3%80%ED%99%98%5D12%EC%9B%94_PC(2).png",
    p_like: 55,
  },
  {
    p_id: 5,
    p_text: "한동에 봄이 더 빨리 오길 바라며",
    p_image:
      "https://encrypted-tbn0.gstatic.com/p_images?q=tbn:ANd9GcRIMF36D7fGoiY4yFSKoVNnN-hm21j1TDAlpA&usqp=CAU",
    p_like: 3012,
  },
  {
    p_id: 6,
    p_text: "한동인에게 듣는 한동인 이야기",
    p_image:
      "https://encrypted-tbn0.gstatic.com/p_images?q=tbn:ANd9GcQqKTQEdvPq-Nh5KZFrRfvgTClJetQB_Do68w&usqp=CAU",
    p_like: 1243,
  },
];

// 스타일드 컴포넌트를 사용하여 스타일 지정
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProfileImage = styled.img`
  width: 150px; /* 변경된 이미지 크기 */
  height: 150px; /* 변경된 이미지 크기 */
  border-radius: 50%;
  margin-right: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const UserStats = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
// 이미지 버튼 스타일링을 하는 것 입니다. 추후 변경 예정입니다. 


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 1000px;
  max-width: 100%;
  margin-top: 20px;
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #333;
  }
`;

const Divider = styled.div`
  border-top: 1px solid #ccc;
  margin: 20px 0;
  width: 100%;
`;

const Statistics = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const StatisticItem = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }

  &:hover img {
    opacity: 0.7;
  }

  &:hover div {
    display: flex;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  p {
    color: white !important;
  }
`;

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState(null);

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const user = {
    ProfileImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/HGU-Emblem-eng2.png",
    username: "HGU_2024_Instagram",
    fullName: "한동인",
    followers: 100,
    following: 50,
    posts: posts.length,
    bio: "안녕 내이름을 소개하지",
  };
  const addPost = () => {
    // Addpost 컴포넌트를 사용하는 로직
    console.log("Addpost button clicked!");
  };

  return (
    <>
      <Helmet>
        <title>Instagram</title>
      </Helmet>

      <Container>
        <TopBar>
          <div>Instagram Clone Coding</div>
          <div>
          <Addpost addPost={addPost} /> {/* Addpost 컴포넌트 사용 */}
            <Button>프로필</Button>
            <Button>보관된 스토리 보기</Button>
            <Button>⚙️</Button>
          </div>
        </TopBar>

        <ProfileHeader>
          <ProfileImage src={user.ProfileImage} alt="Profile" />
          <ProfileInfo>
            <UserInfo>
              <h2>{user.username}</h2>
            </UserInfo>
            <UserStats>
              <StatisticItem>
                <p>
                  게시글 <strong>{user.posts}</strong>
                </p>
              </StatisticItem>
              <StatisticItem>
                <p>
                  팔로워 <strong>{user.followers}</strong>
                </p>
              </StatisticItem>
              <StatisticItem>
                <p>
                  팔로잉 <strong>{user.following}</strong>
                </p>
              </StatisticItem>
            </UserStats>
            <p>{user.bio}</p>
          </ProfileInfo>
        </ProfileHeader>

        <Divider />

        <Grid>
          {posts.map((post) => (
            <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '0px', paddingTop: '0px', position: 'relative' }}>
              <Item key={post.p_id}>
                <ImageContainer>
                  <img
                      src={post.p_image}
                      alt={post.p_text}

                      onClick={() => {
                        setPost(post);
                        setIsOpen(true);
                      }}
                  />
                  <Overlay onClick={() => {  
                    setPost(post);
                    setIsOpen(true);
                  }}>
                    <p>
                      <span style={{ marginRight: '20px' }}>
                        <FavoriteBorderIcon color="inherit" />{post.p_like}
                      </span>
                      <span>
                        <TextsmsIcon color="inherit" />{post.p_text}
                      </span>
                    </p>
                  </Overlay>
                </ImageContainer>
              </Item>
            </div>
          ))}
        </Grid>
      </Container>

      {isOpen && (
        <PostDialog open={isOpen} onClose={handleCloseDialog} post={post} />
      )}
    </>
  );
}