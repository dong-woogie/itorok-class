import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import styled from "styles/theme-components";
import { FiX } from "react-icons/fi";
import ItorokImage from "static/images/Logo.png";
import { lighten } from "polished";

function LoginForm() {
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
          <ExitButton />
        </div>
        <Content>
          <h2 className="title">로그인</h2>
          <div className="email">
            <h4 className="subtitle">이메일로 로그인</h4>
            <form onSubmit={onSubmit}>
              <input type="text" placeholder="이메일을 입력해주세요." />
              <button type="submit">로그인</button>
            </form>
          </div>
          <div className="social">
            <h4 className="subtitle">소셜 계정으로 로그인</h4>
            <div className="social-icons"></div>
          </div>
        </Content>
        <div className="footer">
          아직 회원이 아니신가요?{" "}
          <Link to="/register">
            <span className="register">회원가입</span>
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
    }
  }
  & .social {
    margin-top: 4.8rem;
  }

  & .social-icons {
    margin-top: 2.4rem;
  }
`;

const ExitButton = styled(FiX)`
  font-size: 24px;
  border-radius: 50%;
  box-sizing: content-box;
  padding: 1rem;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.gray4};
  }
`;

export default LoginForm;
