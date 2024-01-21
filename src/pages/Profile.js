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
