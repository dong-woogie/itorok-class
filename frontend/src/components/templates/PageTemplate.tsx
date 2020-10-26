import React from "react";
import styled from "@styled-components";

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
`;

type PageTemplateProps = {
  children: React.ReactNode;
};

function PageTemplate({ children }: PageTemplateProps) {
  return <Wrap>{children}</Wrap>;
}

export default PageTemplate;
