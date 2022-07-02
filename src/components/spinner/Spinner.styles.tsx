import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
/* Spin endless */

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Content = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  border-radius: 100%;
  margin: 100px auto;
  overflow: hidden;
  background: #f0f0f0;
  box-shadow: -10px -10px 20px #fff, 10px 10px 20px #babecc;
`;

export const LoaderPart = styled.div`
  position: relative;
  top: 50%;
  z-index: 999;
  height: 160px;
  width: 160px;
  transform: translateY(-50%);
  margin-left: 20px;
  border-radius: 100%;
  background: #f0f0f0;
  box-shadow: inset 5px 5px 20px #cfcfcf, inset -5px -5px 20px #fdfdfd;
`;

export const Loader = styled.div`
  position: absolute;
  left: 92.5px;
  top: 0;
  height: 100%;
  width: 15px;
  animation: ${spin} 3s linear infinite;
`;
export const LoaderContent = styled.div`
  height: 40px;
  width: 100%;
  background-color: #ed6e4d;
  box-shadow: 0 0 10px 1px #ed6e4d;
`;
