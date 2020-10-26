import React from "react";
import styled, { css } from "@styled-components";

export type DialogProps = {};

function Dialog(props: DialogProps) {
  return (
    <DarkBackground>
      <DarkBlock>하이우기!?</DarkBlock>
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
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 4px;
`;

export default Dialog;
