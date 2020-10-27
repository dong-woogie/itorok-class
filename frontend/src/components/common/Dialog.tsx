import React from "react";
import styled from "@styled-components";

export type DialogProps = {
  children: React.ReactNode;
};

function Dialog(props: DialogProps) {
  return (
    <DarkBackground>
      <DarkBlock>{props.children}</DarkBlock>
    </DarkBackground>
  );
}

const DarkBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const DarkBlock = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 12px 0px;

  width: 60.6rem;
  height: 48rem;
`;

export default Dialog;
