import React, { FormEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styles/theme-components";
import { FiX } from "react-icons/fi";
import ItorokImage from "static/images/Logo.png";
import AuthSocialButton from "components/auth/AuthSocialButton";

function LoginForm() {
  const { pathname } = useLocation();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Wrap>
      <div className="left">
        <div className="image-wrap">
          <img src={ItorokImage} alt={"login logo"} />
        </div>
      </div>
      <div className="right">
        <div className="exit-wrap">
          <ExitButton tabIndex={1} />
        </div>
        <Content>
          <h2 className="title">로그인</h2>
          <div className="email">
            <h4 className="subtitle">이메일로 로그인</h4>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="이메일을 입력해주세요."
                tabIndex={2}
              />
              <button type="submit" tabIndex={3}>
                로그인
              </button>
            </form>
          </div>
          <div className="social">
            <h4 className="subtitle">소셜 계정으로 로그인</h4>
            <div className="social-icons">
              <AuthSocialButton
                provider="github"
                currentPath={pathname}
                tabIndex={4}
              />
              <AuthSocialButton
                provider="google"
                currentPath={pathname}
                tabIndex={5}
              />
              <AuthSocialButton
                provider="facebook"
                currentPath={pathname}
                tabIndex={6}
              />
            </div>
          </div>
        </Content>
        <div className="footer">
          아직 회원이 아니신가요?{" "}
          <Link to="/register">
            <span className="register" tabIndex={7}>
              회원가입
            </span>
          </Link>
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  height: 100%;
  & .left {
    width: 21.6rem;
    padding: 2.4rem;

    display: flex;
    align-items: center;
  }
  & .right {
    padding: 2.4rem;
    flex: 1 1 0%;

    display: flex;
    flex-direction: column;
  }

  & .exit-wrap {
    text-align: right;
    margin-bottom: 3.6rem;
  }

  & .footer {
    margin-top: auto;
    text-align: right;

    & .register {
      color: ${(props) => props.theme.color.teal5};
      font-weight: bold;
    }
  }
`;

const Content = styled.div`
  flex: 1;

  & .subtitle {
    margin: 2.4rem 0;
    color: ${(props) => props.theme.color.gray6};
  }

  & form {
    display: flex;
    height: 4.8rem;
    & input {
      padding: 1.6rem;
      border: 1px solid ${(props) => props.theme.color.gray6};
      border-right: 0px;
      flex: 1;
      border-radius: 4px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    & button {
      width: 9.6rem;
      background-color: ${(props) => props.theme.color.teal5};
      color: white;
      border-radius: 4px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;

      &:focus {
        background: ${(props) => props.theme.color.teal3};
      }
    }
  }
  & .social {
    margin-top: 4.8rem;
  }

  & .social-icons {
    margin-top: 2.4rem;
    display: flex;
    justify-content: space-around;
  }
`;

const ExitButton = styled(FiX)`
  font-size: 24px;
  border-radius: 50%;
  box-sizing: content-box;
  padding: 1rem;

  cursor: pointer;
  outline: none;
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.color.gray4};
  }
`;

export default LoginForm;
