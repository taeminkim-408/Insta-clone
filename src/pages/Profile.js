import { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import PostDialog from "./PostDialog";

// 포스트 목록
const posts = [
  {
    p_id: 1,
    p_text: "리액트 공부중…",
    p_image:
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
      "data:p_image/jpeg;base64,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",
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

// 프로필 목록
const profiles = [
  {
    u_id: 1,
    u_name: "official_HGU",
    u_image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNjEwMjhfODUg%2FMDAxNDc3NjMxMTU0MjE0.Wd9YTKO1hXyARMRN-TiXTYg7lvXR7BXcbXJrD1o5Hs4g.q3zoQAYbcTfedCip1xrEV3801twVecdXErni0xAnFacg.PNG.spot_academy%2Flogo.PNG&type=sc960_832",
    u_text: "한동대학교\n대학교\n한동대학교_공식인스타\nThis is the official Instagram account for Handong Global University"
  }
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
  margin-top: 30px;
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

const Header = styled.header`
  display: flex;
  border-bottom: solid 1px black;
  paddingTop: 15px;
`;

const Section = styled.section`
  white-space: pre-line;
  fontSize: 14px;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
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
        <Header>
          <div style={{paddingRight: 75}}>
            <img  
              height={175}
              width={175}
              src={profiles[0].u_image}
              alt={"Profile"}
              />
          </div>
          <Section>
            <div>
              <h1>{profiles[0].u_name}</h1>
            </div>
            <List>
              <li style={{marginRight:30}}>게시물<span>  169</span></li>
              <li style={{marginRight:30}}>팔로워<span>  4072</span></li>
              <li style={{marginRight:30}}>팔로우<span>  11</span></li>
            </List>
            <div>
              <p>{profiles[0].u_text}</p>
            </div>
          </Section>
        </Header>
        {/* 포스트 배열을 순회하며 포스트 정보를 표시 */}
        <Grid>
          {posts.map((post) => (
            <Item 
              key={post.p_id}
            >
              {/* 이미지 및 캡션 표시, 클릭 시 다이얼로그 열림 */}
              <img
                src={post.p_image}
                alt={post.p_text}
                onClick={() => {
                  setPost(post);
                  setIsOpen(true);
                }}
              />
              <p>♥{post.p_like} {post.p_text}</p>
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
