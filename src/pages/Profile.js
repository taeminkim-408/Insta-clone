import { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import PostDialog from "./PostDialog";

// 포스트 목록
const posts = [
  {
    postId: 1,
    postText: "리액트 공부중…",
    image:
      "https://velog.velcdn.com/images/dooooh2/post/e03d49ee-8c38-4195-ae3e-1ca6668d9581/image.png",
    c_comment: "나도...",
    c_id: "commentid",
    c_image: "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    u_id: "userid",
    u_image: "https://velog.velcdn.com/images/dooooh2/post/e03d49ee-8c38-4195-ae3e-1ca6668d9581/image.png",

    },
  {
    postId: 2,
    postText: "마라탕먹고싶다",
    image: "https://www.foodjang.com/New/05/221806880/221806880_b_1.jpg",
  },
  {
    postId: 3,
    postText: "오늘은 뭐하지",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2018/07/bulletproof-coffee-recipe-5-of-9.jpg",
  },
];

// 스타일드 컴포넌트를 사용하여 스타일 지정
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 1000px;
  height: 100vh;
`;

const Img = styled.img``;

const Item = styled.div`
  width: 300px;
  height: 300px;
  margin: 10px;
  padding: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Profile 컴포넌트 정의
export default function Profile() {
  // 다이얼로그 상태 및 현재 선택된 포스트 상태 설정
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState(null);

  // 다이얼로그 닫기 핸들러
  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* 헬멧을 사용하여 페이지의 타이틀 설정 */}
      <Helmet>
        <title>Instagram</title>
      </Helmet>

      <Container>
        {/* 페이지 상단에 Instagram Clone 텍스트 표시 */}
        <div>
          <h1>Instagram Clone</h1>내 프로필
        </div>
        {/* 포스트 배열을 순회하며 포스트 정보를 표시 */}
        <Grid>
          {posts.map((post) => (
            <Item key={post.postId}>
              {/* 이미지 및 캡션 표시, 클릭 시 다이얼로그 열림 */}
              <img
                src={post.image}
                alt={post.postText}
                onClick={() => {
                  setPost(post);
                  setIsOpen(true);
                }}
              />
              <p>{post.postText}</p>
            </Item>
          ))}
        </Grid>
      </Container>

      {/* 다이얼로그 열린 상태일 때 PostDialog 컴포넌트 표시 */}
      {isOpen && (
        <PostDialog open={isOpen} onClose={handleCloseDialog} post={post} />
      )}
    </>
  );
}
