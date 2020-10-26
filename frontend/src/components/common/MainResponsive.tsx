import React from "react";
import styled from "@styled-components";
import { mediaQuery } from "../../styles/media";

type MainResponsiveProps = {
  children: React.ReactNode;
  className?: string;
};

function MainResponsive({ children, className }: MainResponsiveProps) {
  return <ResponsiveWrap className={className}>{children}</ResponsiveWrap>;
}

export const ResponsiveWrap = styled.div`
  width: 1728px;
  margin-left: auto;
  margin-right: auto;

  ${mediaQuery(1919)} {
    width: 1376px;
  }
  ${mediaQuery(1440)} {
    width: 1280px;
  }
  ${mediaQuery(1312)} {
    width: 912px;
  }
  ${mediaQuery(944)} {
    width: calc(100% - 2rem);
  }
`;

export default MainResponsive;
