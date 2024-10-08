import PostList from "../components/posts/PostList";
import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <MainContainer>
      <PostList isMyPage={false} />
    </MainContainer>
  );
};

export default Main;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin-top: 100px;
`;
