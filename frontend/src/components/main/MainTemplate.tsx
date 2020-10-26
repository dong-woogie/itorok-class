import React from "react";
import styled, { createGlobalStyle } from "@styled-components";

type MainTemplateProps = {
  children: React.ReactNode;
};

function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <BackgroundStyle />
      <Wrap>{children}</Wrap>
    </>
  );
}

const Wrap = styled.div`
  min-height: 100vh;
  overflow: auto;
`;

const BackgroundStyle = createGlobalStyle`
  body{
    background : gray;
  }
`;

export default MainTemplate;
