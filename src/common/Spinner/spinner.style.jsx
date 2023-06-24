import styled, { css } from "styled-components";

const fullOverlayStyle = css`
  position: fixed;
  top: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ fullScreen }) => fullScreen && fullOverlayStyle}
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
