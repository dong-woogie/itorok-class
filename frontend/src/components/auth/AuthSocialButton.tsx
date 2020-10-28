import React from "react";
import styled from "styles/theme-components";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

type AuthSocialButtonProps = {
  provider: "github" | "google" | "facebook";
  currentPath?: string;
  tabIndex?: number;
};

const providerMap = {
  github: {
    color: "#272e33",
    icon: VscGithub,
  },
  google: {
    color: "white",
    icon: FcGoogle,
  },
  facebook: {
    color: "#3b5998",
    icon: FaFacebookF,
  },
};

function AuthSocialButton({
  provider,
  currentPath,
  tabIndex,
}: AuthSocialButtonProps) {
  const info = providerMap[provider];
  const { color, icon: Icon } = info;
  const host = "http://localhost:5000";
  const redirectTo = `${host}/api/auth/social/redirect/${provider}?next=${currentPath}`;
  return (
    <Wrap color={color} href={redirectTo} tabIndex={tabIndex}>
      <Icon fontSize="2rem" style={{ color: "white" }} />
    </Wrap>
  );
}

const Wrap = styled.a<{ color: string }>`
  width: 4.8rem;
  height: 4.8rem;
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.color.gray3};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 12px 0px;
  outline: none;

  &:focus {
    transform: scale(1.2);
  }
`;

export default AuthSocialButton;
