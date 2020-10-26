import React from "react";
import styled, { css } from "@styled-components";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoLogoOctocat } from "react-icons/io";
import { lighten } from "polished";
import MainResponsive from "components/common/MainResponsive";
import Dialog from "components/common/Dialog";

function Header() {
  return (
    <Wrap>
      <MainResponsive>
        <Content>
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="right">
            <div className="search">
              <SearchButton>
                <FiSearch fontSize="1.8rem" />
              </SearchButton>
            </div>
            <div className="login">
              <LoginButton>로그인</LoginButton>
            </div>
          </div>
        </Content>
      </MainResponsive>
      <Dialog />
    </Wrap>
  );
}

const Wrap = styled.header`
  width: 100%;
  height: 4rem;

  padding: 1.2rem 0;

  box-sizing: content-box;
  display: flex;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.color.gray3};
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & .right {
    display: flex;

    div + div {
      margin-left: 2rem;
    }
  }
`;

const Logo = styled(IoLogoOctocat)`
  font-size: 4rem;
  color: ${(props) => props.theme.color.default};

  &:active {
    color: ${(props) => lighten(0.1, props.theme.color.default)};
  }
`;

const SearchButton = styled.button`
  ${(props) => {
    const silver = props.theme.color.gray4;
    return css`
      cursor: pointer;
      width: 4rem;
      height: 4rem;
      padding: 0;
      border-radius: 50%;
      &:hover {
        background-color: silver;
      }
      &:active {
        font-weight: bold;
        background-color: ${lighten(0.05, silver)};
      }
    `;
  }}
`;

const LoginButton = styled.button`
  cursor: pointer;
  height: 100%;
  border-radius: 24px;
  background: ${(props) => props.theme.color.gray8};
  color: ${(props) => props.theme.color.white};
  padding: 0 2rem;

  &:hover {
    background: ${(props) => props.theme.color.gray6};
  }
  &:active {
    background: ${(props) => props.theme.color.gray4};
  }
`;

export default Header;
